function scrollToSection(number) {
    var sectionNumber = 'section' + number;
    var point = document.getElementById(sectionNumber);
    point.scrollIntoView({ behavior: 'smooth' });
}