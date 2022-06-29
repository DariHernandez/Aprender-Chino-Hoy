const courses_buttons = document.querySelectorAll (".cursos-wrapper .btn.cta")
const form_select = document.querySelector ("form select#curso")

for (const courses_button of courses_buttons) {
    courses_button.addEventListener ("click", function (e) {
        let wrapper = this.parentNode
        let title = wrapper.querySelector ("h3 span:first-child")
        let course_name = title.innerHTML.trim()
        form_select.value = course_name
    })
}