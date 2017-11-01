import jQuery from 'jquery';
var $ = jQuery;
import '../libs/isotope.pkgd.min.js';

class PostFilter {
    constructor() {
        this.filterContainer = $('.gallery__container_2');
        this.buttons = $('.gallery__btn__group');
        this.filter();
        this.buttons();
    }
    buttons() {
        this.buttons.on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            this.filterContainer.isotope({ filter: filterValue });
        });
    }

    filter() {
        this.filterContainer.isotope({
            itemSelector: '.gallery__box',
            percentPosition: true,
            masonry: {
                columnWidth: '.gallery__box'
            }
        });
    }
}

export default PostFilter;