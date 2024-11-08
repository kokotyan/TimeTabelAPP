// dateUtils.ts

export const isToday = (date: string): boolean => {
    const today = new Date();
    const targetDate = new Date(date);
    return (
      today.getFullYear() === targetDate.getFullYear() &&
      today.getMonth() === targetDate.getMonth() &&
      today.getDate() === targetDate.getDate()
    );
  };
  
  export const isTomorrow = (date: string): boolean => {
    const today = new Date();
    const targetDate = new Date(date);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return (
      tomorrow.getFullYear() === targetDate.getFullYear() &&
      tomorrow.getMonth() === targetDate.getMonth() &&
      tomorrow.getDate() === targetDate.getDate()
    );
  };
  