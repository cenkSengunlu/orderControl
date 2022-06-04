const justText = (event) => {
    const re = /[a-zA-ZüğşçöıÜĞŞİÇÖI]/;
    if(!re.test(event.key)){
        event.preventDefault();
    }
  }
  
  export default justText;