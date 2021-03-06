import $ from 'jquery';

class Blend{

    constructor(){
        this.inputcheck = $('#blend-wrapper__check');
        this.blendoptions = $('.blend-wrapper__options');
        this.selectoptions = $('.blend-wrapper__select');
        this.wrapperblend = $('.center__img--wrapper--blend');
        this.codedivblend = $('.center--modal__blend');
        this.inputopacity = $('.blend-wrapper__options__opacity input');
        this.reset = $('#reset');
        this.events();
    }
    
    events(){
        this.inputcheck.on('click', this.BlendCheck.bind(this));
        $('.input-color, .blend-wrapper__select, .blend-wrapper__options__opacity input').on('input', this.SelectOptions.bind(this));
        this.reset.on('click', this.ResetBlend.bind(this))
    }
    
    BlendCheck(){        
        this.blendoptions.toggleClass('showHide');

        if(this.blendoptions.not('.showHide')){
            this.wrapperblend.removeAttr('style');
            this.codedivblend.hide();
        }

        if(this.blendoptions.hasClass('showHide')){
            this.codedivblend.show();
            this.wrapperblend.css('background-color', $('.input-color').val());
            this.wrapperblend.css('opacity', this.inputopacity.val());
            this.wrapperblend.css('mix-blend-mode', this.selectoptions.val());
            this.codedivblend.css('padding', 15);
            this.codedivblend.css('padding-top', 0);
            this.codedivblend.html('<span class="newblend">.filter::before{<br>'+ '&nbsp;&nbsp;&nbsp;&nbsp;' + $('.center__img--wrapper--blend').attr('style') + '\n}</span>'); 
        }
    }
    
    SelectOptions(){
        this.wrapperblend.css('background-color', $('.input-color').val());
        this.wrapperblend.css('opacity', this.inputopacity.val());
        this.wrapperblend.css('mix-blend-mode', this.selectoptions.val());
        $('.newblend').remove();
        this.codedivblend.html('<span class="newblend">.filter::before{<br>' + $('.center__img--wrapper--blend').attr('style') + '<br>}</span>');
    }

    ResetBlend(){  
        if(this.blendoptions.hasClass('showHide')){
            this.wrapperblend.removeAttr('style');
            this.codedivblend.hide();
            this.blendoptions.removeClass('showHide');
            this.inputcheck.prop('checked', false);
        }    
    }
}

export default Blend;