let  filterDropdown = document.querySelector('.filter__dropdown')
let  btnFilter = document.querySelector('.btn-filter')
let  filter = document.querySelector('.filter')
let  filterCleosIcon = document.querySelector('.filter__header__icon')

btnFilter.addEventListener('click', function() {
    filter.classList.toggle('filter--show')
})

filterCleosIcon.addEventListener('click', function() {
    filter.classList.remove('filter--show')
})

filterDropdown.addEventListener('click', function() {
    this.classList.toggle('filter__dropdown--activ')
})