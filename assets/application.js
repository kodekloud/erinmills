/*Created 2015-05-18  by RKS*/
function init(){
                $('<div class="modal-backdrop custom_backdrop"><img src="http://kodekloud.s3.amazonaws.com/sites/554a79236e6f64713f000000/69e8cd982124dc73de1f5a67a627ee75/loading.gif" class="" alt=""></div>').appendTo(document.body);
}
function init_hours(){
    var monday_hours = getRegHoursForDayIndex(1);
    var saturday_hours = getRegHoursForDayIndex(6);
    var sunday_hours = getRegHoursForDayIndex(0);
    
    renderLayoutHours('#monday_hours_container', '#monday_hours_template', monday_hours);
    renderLayoutHours('#saturday_hours_container', '#saturday_hours_template', saturday_hours);
    renderLayoutHours('#sunday_hours_container', '#sunday_hours_template', sunday_hours);
}
    
function renderLayoutHours(container, template, collection){
    var item_list = [];
    var item_rendered = [];
    var template_html = $(template).html();
    Mustache.parse(template_html);   // optional, speeds up future uses
    item_list.push(collection);
        $.each( item_list , function( key, val ) {
            var open_time = new Date (val.open_time);
            var close_time = new Date (val.close_time);
            val.open_time = convert_hour(open_time);
            val.close_time = convert_hour(close_time);    
            val.h = val.open_time+ " - " + val.close_time;
            console.log(val.h)
            var rendered = Mustache.render(template_html,val);
            item_rendered.push(rendered);
        });
        $(container).html(item_rendered.join(''));
}


function renderSideEvents(container, template, collection, type){
    var item_list = [];
    var item_rendered = [];
    var template_html = $(template).html();
    Mustache.parse(template_html);   // optional, speeds up future uses
    item_list.push(collection);
    if (type=="event"){
        $.each( item_list , function( key, val ) {
            
            if ((val.event_image_url).indexOf('missing.png') > -1){
                val.alt_promo_image_url = "http://kodekloud.s3.amazonaws.com/sites/554a79236e6f64713f000000/172a94a0e1dd6a2eeec91e2cea4e8b92/logo.png";
            }
            else{
                val.alt_promo_image_url = getImageURL(val.event_image_url);
            }
            var rendered = Mustache.render(template_html,val);
            item_rendered.push(rendered);
        });
    }
    else if(type=="promo"){
        $.each( item_list , function( key, val ) {
            
            if ((val.promo_image_url).indexOf('missing.png') > -1){
                val.alt_promo_image_url = "http://kodekloud.s3.amazonaws.com/sites/554a79236e6f64713f000000/172a94a0e1dd6a2eeec91e2cea4e8b92/logo.png";
            }
            else{
                val.alt_promo_image_url = getImageURL(val.promo_image_url);
            }
            var rendered = Mustache.render(template_html,val);
            console.log(rendered)
            item_rendered.push(rendered);
        });
    }
    $(container).html(item_rendered.join(''));
}


function convert_hour(d){
    var h = (d.getUTCHours());
    var m = addZero(d.getUTCMinutes());
    var s = addZero(d.getUTCSeconds());
    if (h >= 12) {
        if ( h != 12) {
            h = h - 12;    
        }
        
        i = "pm"
    } else {
        i = "am"
    }
    if (m > 0){
        return h+i;
    }
    else{
        return h+":"+m+i;
    }
}


function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function toggle_mobile_menu(){
        if($(".mobile_menu").is(":visible")){
            $(".mobile_menu").slideUp();    
        } else {
            $(".mobile_menu").slideDown();
        }
    
    }
    
    function show_mobile_sub_menu(id){   
        
        if ($("#mobile-"+id).is(":visible")){
                $("#mobile-"+id).slideUp();
            } else {
                if ($(".mobile_sub_menu_div").is(":visible")){
                    $(".mobile_sub_menu_div").slideUp();
                     $("#mobile-"+id).slideDown();
                     
                } else {
                    $("#mobile-"+id).slideDown(); 
                }
                
        }
    }