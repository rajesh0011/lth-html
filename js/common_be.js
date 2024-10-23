
$(function () {
    
    
    
    
    $('.showHiddenT').on('click', function () {
       
        $(this).siblings('.backdrop').removeClass('d-none');
        $('.showmoreT').slideDown();
    });
    
    
    $(".backdrop").on("click", function () {
        // alert("hi");
        $(this).addClass("d-none");
        if(typeof $(this).attr('data-close') != "undefined") {
            if($(this).hasClass('close-rooms')) {
                $($(this).attr("data-close")).slideUp();
                return true;
            }
            $($(this).attr("data-close")).removeClass('show');
            return false;
        }

        $(".menuopen").slideUp();
    });
    

  $('.appy-rooms-add').on('click', function() {
        $('.showmoreT').hide();
    });
    
    // console.log(.val());
    $('.showmoreT #rooms1').change(createAdulsAndChildsAsRooms1);

    $('#add_new_roomT').click(function() {createAdulsAndChildsAsRooms21()});
    $('#remove_roomT').hide();
    $('.edit_roomT').click(editRoom1);
    $('.adult-inputT').change(function () {
        $(this).parent().parent().parent().siblings().find('.adultT').text($(this).val());
        var no_adults = calculateAdults1();
        changeRoomsValue1(undefined, no_adults, undefined);

    });
    $('.child-inputT').change(function () {
        $(this).parent().parent().parent().siblings().find('.childT').text($(this).val());
        var no_Childs = calculateChilds1();
        changeRoomsValue1(undefined, undefined, no_Childs);

    });
    
    // add_puls_min();
    $('#removeT').click(removeRoomT);

    bindPlusMinusAdultsChilds1('#add_adultT', '#sub_adultT', '#add_childT', '#sub_childT');

});
// ready funcrion ends

function createAdulsAndChildsAsRooms1(count) {
    // todo: add subsequently on change test step by step to get detiled provblem
    if(typeof count != "object")
        var val = Number(count);
    else
        var val = Number($(this).val());

    if(val == 1)
        $('.showmoreT').removeClass('fix-height');
    else 
        $('.showmoreT').addClass('fix-height');

    var new_room_htmlT = $('.room-guestsT').html();
    var show_divs = $('.room-guestsT').length;
    var KT, html = '';
    if (show_divs > val) {
        
        for (var i = show_divs; i > val; i--) {
            KT = i - 1;
            $($('.room-guestsT')[KT]).remove();
        }
    } else {
        //alert(val);
        if (val > 1) {
            if (val == show_divs)
                return false;

            for (var i = show_divs; i < val; i++) {
                // alert(i);
                KT = i + 1;
                html = '<div class="col-12 col-md-8 mt-4 offset-lg-4 room-guestsT">' + new_room_htmlT + '</div>';
                try {
                    html = html.replace('id="adultsT"', 'id="adultsT' + i + '"');
                    html = html.replace('id="childsT"', 'id="childsT' + i + '"');
                    html = html.replace('Room 1', 'Room ' + KT);
                } catch (error) {
                    console.log(html);
                }

                // console.log(html);
                $('#more_fieldsT').append(html);
            }
        }
    }
}


var new_room_htmlT = "", KT = 0, lT; 

function createAdulsAndChildsAsRooms21() {
    var remove_id, addAdultId, subAdultId, addChildId, subChildId;
    $('#remove_roomT').show();
    if (!KT && new_room_htmlT == "") {
        new_room_htmlT = $('#append_hereT').html();
    }
    var html = new_room_htmlT;

    KT++;
    lT = KT + 1;
    if ($('.add-thisT').length < 100) {
        $('.stripT').removeClass('d-none');
        $('.stripT2').addClass('d-none');
        remove_id = 'removeT' + KT;
        addAdultId = "add_adultT" + KT;
        subAdultId = "sub_adultT" + KT;
        addChildId = "add_childT" + KT;
        subChildId = "sub_childT" + KT;
        try {
            html = html.replace('id="adultsT"', 'id="adultsT' + KT + '"');
            html = html.replace('id="childsT"', 'id="childsT' + KT + '"');
            // html = html.replace('Room 1', 'Room ' + lT );
            html = html.replace('remove_roomT d-none', 'remove_roomT');
            html = html.replace('id="removeT"', 'id="' + remove_id + '"');

            html = html.replace('id="sub_adultT"', 'id="' + subAdultId + '"');
            html = html.replace('id="add_adultT"', 'id="' + addAdultId + '"');
            html = html.replace('id="sub_childT"', 'id="' + subChildId + '"');
            html = html.replace('id="add_childT"', 'id="' + addChildId + '"');
        } catch (error) {
            console.log(html);
        }
        $('#append_hereT').append(html);
        $('.rooms-listT')[$('.add-thisT').length - 1].innerText = "ROOM" + $('.add-thisT').length;
        changeRoomsValue1($('.add-thisT').length);
        $('.edit_roomT').click(editRoom1);

        var no_adults = calculateAdults1();
        changeRoomsValue1(undefined, no_adults, undefined);
        var no_Childs = calculateChilds1();
        changeRoomsValue1(undefined, undefined, no_Childs);

        $('.adult-inputT').change(function () {
            $(this).parent().parent().parent().siblings().find('.adultT').text($(this).val());
            var no_adults = calculateAdults1();
            changeRoomsValue1(undefined, no_adults, undefined);

        });
        $('.child-inputT').change(function () {
            $(this).parent().parent().parent().siblings().find('.childT').text($(this).val());
            var no_Childs = calculateChilds1();
            changeRoomsValue1(undefined, undefined, no_Childs);

        });

        $('#' + remove_id).click(removeRoomT);
        // add_puls_min();

        bindPlusMinusAdultsChilds1('#' + addAdultId, '#' + subAdultId, '#' + addChildId, '#' + subChildId);
        if ($('.add-thisT').length == 100) {
            $('#add_new_roomT').hide();
        }
        
    }
   
}

function changeRoomsValue1(rooms, adults, childs) {
    var val = $('#rooms_childs_showT').val();

    val = val.split(' - ');
    console.log(val);
    var rooms1 = typeof rooms != "undefined" ? rooms : val[0].split(' ')[1];
    var adults1 = typeof adults != "undefined" ? adults : val[1].split(' ')[1];
    var childs1 = typeof childs != "undefined" ? childs : val[2].split(' ')[1];

    $('#rooms_childs_showT').val('Room(s) ' + rooms1 + ' - ' + 'Adult(s) ' + adults1 + ' - ' + 'Children ' + childs1);

}

function editRoom1() {
    $('.stripT').removeClass('d-none');
    $('.stripT2').addClass('d-none');
    $(this).parent().addClass('d-none');
    $(this).parent().parent().siblings('.stripT2').removeClass('d-none');
}

function calculateRooms1() {
    var countRooms = 0;
    for(var i = 0; i < $('.adult-inputT').length; i++) {
        countRooms += Number($('.adult-inputT')[i].value);
    }
    return countAdult;
}
function calculateAdults1() {
    var countAdult = 0;
    for(var i = 0; i < $('.adult-inputT').length; i++) {
        countAdult += Number($('.adult-inputT')[i].value);
    }
    return countAdult;
}
function calculateChilds1() {
    var countChild = 0;
    for(var i = 0; i < $('.child-inputT').length; i++) {
        countChild += Number($('.child-inputT')[i].value);
    }
    return countChild;
}

function bindPlusMinusAdultsChilds1(add_adult_id, sub_adult_id, add_child_id, sub_child_id) {
    $(add_adult_id).click(function () {
        if ($(this).prev().val() < 4) {
            $(this).prev().val(+$(this).prev().val() + 1);
            var no_adults = calculateAdults1();
            changeRoomsValue1(undefined, no_adults, undefined);
            var no_Childs = calculateChilds1();
            changeRoomsValue1(undefined, undefined, no_Childs);
            $(this).parent().parent().parent().parent().siblings().find('.adultT').text($(this).siblings('.adult-inputT').val());
            $(this).parent().parent().parent().parent().siblings().find('.childT').text($(this).siblings('.child-inputT').val());
        }
    });
    $(sub_adult_id).click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1)
                $(this).next().val(+$(this).next().val() - 1);
            var no_adults = calculateAdults1();
            changeRoomsValue1(undefined, no_adults, undefined);
            var no_Childs = calculateChilds1();
            changeRoomsValue1(undefined, undefined, no_Childs);

            $(this).parent().parent().parent().parent().siblings().find('.adultT').text($(this).siblings('.adult-inputT').val());
            // $(this).parent().parent().parent().siblings().find('.child').text($(this).siblings('.child-inputT').val());
        }
    });
    
    $(add_child_id).click(function () {
        if ($(this).prev().val() < 2) {
            $(this).prev().val(+$(this).prev().val() + 1);
            var no_adults = calculateAdults1();
            changeRoomsValue1(undefined, no_adults, undefined);
            var no_Childs = calculateChilds1();
            changeRoomsValue1(undefined, undefined, no_Childs);
            $(this).parent().parent().parent().parent().siblings().find('.adultT').text($(this).siblings('.adult-inputT').val());
            $(this).parent().parent().parent().parent().siblings().find('.childT').text($(this).siblings('.child-inputT').val());
        }
    });
    $(sub_child_id).click(function () {
        if ($(this).next().val() > 0) {
            if ($(this).next().val() > 0)
                $(this).next().val(+$(this).next().val() - 1);
            var no_adults = calculateAdults1();
            changeRoomsValue1(undefined, no_adults, undefined);
            var no_Childs = calculateChilds1();
            changeRoomsValue1(undefined, undefined, no_Childs);
            $(this).parent().parent().parent().parent().siblings().find('.childT').text($(this).siblings('.child-inputT').val());
        }
    });
}

function removeRoomT() {
    $('#add_new_roomT').show();
    $(this).parent().parent().parent().remove();
    var rooms = $('.add-thisT').length;
    var no_adults = calculateAdults1();
    var no_Childs = calculateChilds1();
    changeRoomsValue1(rooms, no_adults, no_Childs);
    var p = 0;
    for (var i = 0; i < rooms; i++) {
        p = i+1;
        $('.rooms-listT')[i].innerText = "ROOM" + p;
    }
}

function viewimg(imgname, imgTitle) {
       var img = document.querySelector('.brands_img');
       img.src = 'new-images/' + imgname;
       $('.our_brands_img_caption').html(imgTitle);
       // $('').setAttribute('src', 'kimages/' + imgname);
   }
   $('.panel-collapse').on('show.bs.collapse', function (e) {
       $(e.target).closest('.panel').siblings().find('.panel-collapse').collapse('hide');
});