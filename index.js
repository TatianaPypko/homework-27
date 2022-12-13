const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const { form } = event.target;
  const name = form[1].value;
  const lastname = form[2].value;         
  const birthday = form[3].value; 
  const gender = form[4].checked ? "жіноча" : "чоловіча";
  const city = form[6].value;
  const text = form[7].value;
  const phone = form[12].value; 

  let languages = [];
  for (let i = 8;  i < 12; i++) {
    if (form[i].checked) {
      languages.push(form[i].nextElementSibling.textContent.toLowerCase());
    }
  }
  
  const tableName = document.querySelector(".table__name")
  tableName.nextElementSibling.textContent = name;
  
  const tableLastname = document.querySelector(".table__lastname");
  tableLastname.nextElementSibling.textContent = lastname;

  const tableBirthday = document.querySelector(".table__date");
  tableBirthday.nextElementSibling.textContent = birthday;
  
  const tableGender = document.querySelector(".table__gender");
  tableGender.nextElementSibling.textContent = gender;

  const tableCity = document.querySelector(".table__city");
  tableCity.nextElementSibling.textContent = city;

  const tableText = document.querySelector(".table__address");
  tableText.nextElementSibling.textContent = text;

  const tableLanguages = document.querySelector(".table__languages");
  tableLanguages.nextElementSibling.textContent = languages.join(', ');
 
  const tablePhone = document.querySelector(".table__phone");
  tablePhone.nextElementSibling.textContent = phone;

  document.querySelector("form").style.display = "none";
  document.querySelector("table").style.display = "block";
});

