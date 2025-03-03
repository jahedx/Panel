/* eslint-disable */
import { DefaultError } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

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
      return "error occured";
    case ErrorType.AUTHENTICATION:
      return "error occured";
    case ErrorType.AUTHORIZATION:
      return "error occured";
    case ErrorType.VALIDATION:
      return "error occured";
    case ErrorType.NOT_FOUND:
      return "error occured";
    case ErrorType.API:
      return "error occured";
    default:
      return "error occured";
  }
};

// Main error handling function
export const handleError = (error: DefaultError) => {
  if (
    axios.isAxiosError(error) &&
    error.response &&
    error.response?.data?.messages?.length > 0
  ) {
    error.response?.data?.messages.forEach((err: string) => {
      toast.error(err, {
        id: "error-toast", // Assign an ID to the toast
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
  if (
    axios.isAxiosError(error) &&
    error.response &&
    error.response?.status === 401
  ) {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  return;
};
