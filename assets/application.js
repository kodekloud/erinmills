/*Created 2015-05-18  by RKS*/
function init(){
                $('<div class="modal-backdrop custom_backdrop"><img src="http://kodekloud.s3.amazonaws.com/sites/554a79236e6f64713f000000/69e8cd982124dc73de1f5a67a627ee75/loading.gif" class="" alt=""></div>').appendTo(document.body);

            
            $(".footer_feature_box").hover(function(){
                switch (this.id){
                    case 'gift':
                        $('#'+this.id+'-img').attr("src",'http://cdn.mallmaverick.com/system/site_images/photos/000/004/163/original/footer_giftcard-selected.png?1411422793');
                        break;
                    case 'video':
                        $('#'+this.id+'-img').attr("src",'http://cdn.mallmaverick.com/system/site_images/photos/000/004/169/original/footer_video-selected.png?1411422884');
                        break;
                    case 'redev':
                        $('#'+this.id+'-img').attr("src",'http://cdn.mallmaverick.com/system/site_images/photos/000/004/165/original/footer_redev-selected.png?1411422846');
                        break;
                }
            },function(){
        
                switch (this.id){
                    case 'gift':
                        $('#'+this.id+'-img').attr("src",'http://cdn.mallmaverick.com/system/site_images/photos/000/004/164/original/footer_giftcard.png?1411422811');
                        break;
                    case 'video':
                        $('#'+this.id+'-img').attr("src",'http://cdn.mallmaverick.com/system/site_images/photos/000/004/171/original/footer_video.png?1411422902');
                        break;
                    case 'redev':
                        $('#'+this.id+'-img').attr("src",'http://cdn.mallmaverick.com/system/site_images/photos/000/004/167/original/footer_redev.png?1411422860');
                        break;
                }
            });
    
    var monday_hours = getRegHoursForDayIndex(1);
    var saturday_hours = getRegHoursForDayIndex(1);
    var sunday_hours = getRegHoursForDayIndex(0);
    
    renderLayoutHours(monday_hours_container, monday_hours_template, monday_hours);
}
function renderLayoutHours(container, template, collection){
    var item_list = [];
    var item_rendered = [];
    var template_html = $(template).html();
    Mustache.parse(template_html);   // optional, speeds up future uses
    item_list.push(collection);
        $.each( collection , function( key, val ) {
            if (val.open_time && val.close_time && val.is_closed == false){
                var open_time = new Date (val.open_time)
                var close_time = new Date (val.close_time)
                val.open_time = convert_hour(open_time);
                val.close_time = convert_hour(close_time);    
                val.h = val.open_time+ " - " + val.close_time;
            } else {
                "Closed"
            }
                item_list.push(val)
            }
        });
}


function renderSideEvents(container, template, collection){
    var item_list = [];
    var item_rendered = [];
    var template_html = $(template).html();
    Mustache.parse(template_html);   // optional, speeds up future uses
    item_list.push(collection);
    $.each( item_list , function( key, val ) {
        if ((val.event_image_url).indexOf('missing.png') > -1){
            val.alt_promo_image_url = "http://kodekloud.s3.amazonaws.com/sites/554a79236e6f64713f000000/172a94a0e1dd6a2eeec91e2cea4e8b92/logo.png"
        }
        else{
            val.alt_promo_image_url = getImageURL(val.event_image_url);
        }
        var rendered = Mustache.render(template_html,val);
        item_rendered.push(rendered);
    });
    
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
        
        i = "PM"
    } else {
        i = "AM"
    }
    return h+":"+m+" "+i;
}


function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}