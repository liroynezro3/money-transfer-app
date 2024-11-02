   export const formatDate=(date)=>{
        const formattedDate = new Date(date).toLocaleDateString("he-IL", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
          });
          return formattedDate
    }