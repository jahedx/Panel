type Props = {
  className?: string;
  size?: number;
  stroke?: number;
};
const DEFAULT_SIZE: number = 20;
const DEFAULT_STROKE_WIDTH: number = 2;

export function LoadingIcon({
  size = DEFAULT_SIZE,
  stroke = DEFAULT_STROKE_WIDTH,
  className,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width={size}
      height={size}
      className={`${className} animate-spin`}
    >
      <g>
        <circle
          strokeDasharray="164.93361431346415 56.97787143782138"
          r="35"
          strokeWidth={stroke}
          stroke="currentColor"
          fill="none"
          cy="50"
          cx="50"
        ></circle>
        <g />
      </g>
    </svg>
  );
}
export function ArrowRightToLineIcon({
  className,
  size = DEFAULT_SIZE,
  stroke = DEFAULT_STROKE_WIDTH,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={"currentColor"}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} lucide lucide-arrow-right-to-line`}
    >
      <path d="M17 12H3" />
      <path d="m11 18 6-6-6-6" />
      <path d="M21 5v14" />
    </svg>
  );
}
export function LogoutIcon({
  className,
  size = DEFAULT_SIZE,
  stroke = DEFAULT_STROKE_WIDTH,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={"currentColor"}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} lucide lucide-log-out`}
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}
export function PanelRighIcon({
  className,
  size = DEFAULT_SIZE,
  stroke = DEFAULT_STROKE_WIDTH,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={"currentColor"}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} lucide lucide-panel-right`}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M15 3v18" />
    </svg>
  );
}
export function HouseIcon({
  className,
  size = DEFAULT_SIZE,
  stroke = DEFAULT_STROKE_WIDTH,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={"currentColor"}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} lucide lucide-house`}
    >
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
}
export function SlackIcon({
  className,
  size = DEFAULT_SIZE,
  stroke = DEFAULT_STROKE_WIDTH,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={"currentColor"}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} lucide lucide-slack`}
    >
      <rect width="3" height="8" x="13" y="2" rx="1.5" />
      <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
      <rect width="3" height="8" x="8" y="14" rx="1.5" />
      <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
      <rect width="8" height="3" x="14" y="13" rx="1.5" />
      <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
      <rect width="8" height="3" x="2" y="8" rx="1.5" />
      <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
    </svg>
  );
}
export function SearchIcon({
  className,
  size = DEFAULT_SIZE,
  stroke = DEFAULT_STROKE_WIDTH,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={"currentColor"}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} lucide lucide-search`}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
export function PanelsRightBottomIcon({
  className,
  size = DEFAULT_SIZE,
  stroke = DEFAULT_STROKE_WIDTH,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={"currentColor"}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} lucide lucide-panels-right-bottom`}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 15h12" />
      <path d="M15 3v18" />
    </svg>
  );
}
export function ChevronUpIcon({
  className,
  size = DEFAULT_SIZE,
  stroke = DEFAULT_STROKE_WIDTH,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={"currentColor"}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} lucide lucide-chevron-up`}
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}
export function ChevronRightIcon({
  className,
  size = DEFAULT_SIZE,
  stroke = DEFAULT_STROKE_WIDTH,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={"currentColor"}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} lucide lucide-chevron-right`}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
export function CalendarIcon({
  className,
  size = DEFAULT_SIZE,
  stroke = DEFAULT_STROKE_WIDTH,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={"currentColor"}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} lucide lucide-calendar`}
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}
