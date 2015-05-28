/*Created 2015-05-18  by RKS*/
function init(){
                $('<div class="modal-backdrop custom_backdrop"><img src="http://kodekloud.s3.amazonaws.com/sites/554a79236e6f64713f000000/69e8cd982124dc73de1f5a67a627ee75/loading.gif" class="" alt=""></div>').appendTo(document.body);

            
            $(".footer_feature_box").hover(function(){
                switch (this.id){
                    case 'gift':
                        $('#'+this.id+'-img').attr("src",'http://cdn.mallmaverick.com/system/site_images/photos/000/004/163/original/footer_giftcard-selected.png?1411422793');
                        break;
                    ;
                    case 'video':
                        $('#'+this.id+'-img').attr("src",'http://cdn.mallmaverick.com/system/site_images/photos/000/004/169/original/footer_video-selected.png?1411422884');
                        break;
                    ;
                    case 'redev':
                        $('#'+this.id+'-img').attr("src",'http://cdn.mallmaverick.com/system/site_images/photos/000/004/165/original/footer_redev-selected.png?1411422846');
                        break;
                    ;
                }
            },function(){
        
                switch (this.id){
                    case 'gift':
                        $('#'+this.id+'-img').attr("src",'http://cdn.mallmaverick.com/system/site_images/photos/000/004/164/original/footer_giftcard.png?1411422811');
                        break;
                    ;
                    case 'video':
                        $('#'+this.id+'-img').attr("src",'http://cdn.mallmaverick.com/system/site_images/photos/000/004/171/original/footer_video.png?1411422902');
                        break;
                    ;
                    case 'redev':
                        $('#'+this.id+'-img').attr("src",'http://cdn.mallmaverick.com/system/site_images/photos/000/004/167/original/footer_redev.png?1411422860');
                        break;
                    ;
                    
                }
            });

}