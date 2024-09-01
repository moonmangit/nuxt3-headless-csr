export const formatNumber = Intl.NumberFormat("en-US").format;

export const formatCurrency = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format;

// date
export const formatDate = Intl.DateTimeFormat("en-US").format;
export const formatDateShort = Intl.DateTimeFormat("en-US", {
  dateStyle: "short",
}).format;
export const formatDateFull = Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
}).format;

// time
export const formatTime = Intl.DateTimeFormat("en-US", {
  timeStyle: "medium",
}).format;
export const formatTimeShort = Intl.DateTimeFormat("en-US", {
  timeStyle: "short",
}).format;
export const formatTimeFull = Intl.DateTimeFormat("en-US", {
  timeStyle: "full",
}).format;

// datetime
export const formatDateTime = Intl.DateTimeFormat("en-US").format;
export const formatDateTimeShort = Intl.DateTimeFormat("en-US", {
  dateStyle: "short",
  timeStyle: "short",
}).format;
export const formatDateTimeFull = Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "full",
}).format;
