import moment from "moment";
import "moment/locale/id"; // Gunakan locale Indonesia

// Set locale ke Bahasa Indonesia
moment.locale("id");

export function formattedDate(date: string | Date): string {
  const now = moment(); 
  const inputDate = moment(date); // Konversi input ke format Moment.js
  const diffMinutes = now.diff(inputDate, "minutes");
  const diffHours = now.diff(inputDate, "hours");
  const diffDays = now.diff(inputDate, "days");

  if (diffMinutes < 60) return `${diffMinutes} menit yang lalu`;
  if (diffHours < 24) return `${diffHours} jam yang lalu`;
  if (diffDays === 1) return `Kemarin, ${inputDate.format("D MMMM")}`;

  return inputDate.format("dddd, D MMMM"); // : "Senin, 25 Oktober"
}
