/* eslint-disable */
import { DefaultError } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { router } from "@/main";
import { clearTokens } from "./auth";

// Define error types
export enum ErrorType {
  NETWORK = "NETWORK",
  API = "API",
  AUTHENTICATION = "AUTHENTICATION",
  AUTHORIZATION = "AUTHORIZATION",
  VALIDATION = "VALIDATION",
  NOT_FOUND = "NOT_FOUND",
  UNKNOWN = "UNKNOWN",
}

// Function to determine error type
const getErrorType = (error: DefaultError): ErrorType => {
  if (axios.isAxiosError(error)) {
    if (!error.response) return ErrorType.NETWORK;
    switch (error.response.status) {
      case 401:
        return ErrorType.AUTHENTICATION;
      case 403:
        return ErrorType.AUTHORIZATION;
      case 404:
        return ErrorType.NOT_FOUND;
      case 422:
        return ErrorType.VALIDATION;
      default:
        return ErrorType.API;
    }
  }
  return ErrorType.UNKNOWN;
};

// Function to get user-friendly message
const GetUserFriendlyMessage = (errorType: ErrorType): string => {
  switch (errorType) {
    case ErrorType.NETWORK:
      return "Network connection error. Please check your internet connection.";
    case ErrorType.AUTHENTICATION:
      return "Your session has expired. Please log in again.";
    case ErrorType.AUTHORIZATION:
      return "You don't have permission to perform this action.";
    case ErrorType.VALIDATION:
      return "Please check your input and try again.";
    case ErrorType.NOT_FOUND:
      return "The requested resource was not found.";
    case ErrorType.API:
      return "An unexpected error occurred. Please try again later.";
    default:
      return "An unexpected error occurred.";
  }
};

// Main error handling function
export const handleError = (error: DefaultError) => {
  if (axios.isAxiosError(error) && error.response?.data?.messages?.length > 0) {
    error.response!.data.messages.forEach((err: string) => {
      toast.error(err, {
        id: "error-toast",
      });
    });
  } else {
    handleApiError(error);
    const userMessage = GetUserFriendlyMessage(getErrorType(error));
    toast.error(userMessage);
  }
};

// Function to handle API errors specifically
export const handleApiError = (error: DefaultError) => {
  if (axios.isAxiosError(error) && error.response?.status === 401) {
    clearTokens();
    router.navigate({ to: "/auth/login" });
  }
  return;
};
