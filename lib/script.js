var random = function (len, bits)
{
    bits = bits || 36;
    var outStr = "", newStr;
    while (outStr.length < len)
    {
        newStr = Math.random().toString(bits).slice(2);
        outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
    }
    return outStr;
};


var storeges = localStorage.getItem('shortdata');
if(storeges === null){

    const data = [{id:random(10),name:'Youtube',url:'https://youtube.com',icon:"https://www.youtube.com/s/desktop/4f3912cf/img/favicon.ico"}];
    localStorage.setItem('shortdata',JSON.stringify(data))


}else{

    var short = JSON.parse(localStorage.getItem("shortdata"));
    for(let i=0;i<short.length;i++){
        $('.main').append(`

        
            <div class="socil_area" >
            <div class="trash" data-id="${i}"><img class="trash-src" src="./img/trash.svg"></div>
            <a id="card" class="acard" target="_blank" href="${short[i].url}" title="${short[i].name}">
                <div class="icon"><img src="${short[i].icon}" alt="icon:${short[i].name}"></div>
                <div class="detail">${short[i].name}</div>
                </a>
            </div>
        
        
        `);
    }

}



document.addEventListener("DOMContentLoaded",function(){
    $('.main').append(`

        <div class="socil_area addbtn">
            <div class="icon"><img src="./img/plus.png" alt="" srcset=""></div>
            <div class="detail">Add shortcut</div>
        </div>
    
    `);

        
   $('button.btn').click(e => e.preventDefault());   
// add data localStorage.setItem('shortdata',JSON.stringify(shortdata))
    $(".socil_area.addbtn").click(()=>{
        $('.inset-form').css('display','block');
        $('#cancel').click(function(){$('.form-popup').css('display','none');});
    });

    $('#_username').on('keydown',function(){
        $('#_url').val(`https://${$(this).val().toLowerCase().trim( )}.com`);
    });

    ///submit
    $('#submit').click(function(){
        if($('#_username').val() === ''){
            alert('Name input field is empty');
        }else if($('#_url').val() === ''){
            alert('Url input field is empty!')
        }else{

        
            const items = {
                id:random(10),
                name:$('#_username').val(),
                url:$('#_url').val(),
                icon:"https://www.google.com/s2/favicons?domain="+$('#_url').val()
            };

            //get olds values
            Values = JSON.parse(localStorage.getItem('shortdata')); 

            //push new value
            Values.push(items);

            //saved values
            localStorage.setItem('shortdata', JSON.stringify(Values));
            $('.form-popup').css('display','none');
            $('#_name').val('');
            $('#_url').val('');
            window.location.reload();
        }
    });
})




$('div.trash').click(function(e){
    e.preventDefault();
    var id = $(this).data('id');
    var arr = JSON.parse(localStorage.getItem('shortdata'));
    arr.splice(id,1);
    console.log(arr)
    localStorage.setItem('shortdata',JSON.stringify(arr))
    window.location.reload();
    
});


//background image script start
const burl = localStorage.getItem('bgImage');
if(burl === null){
    localStorage.setItem('bgImage','../img/backgrund.jpg');
    $('body').css('background-image',`url(https://picsum.photos/200/300)`);
}else{
    $('body').css('background-image','url('+burl+')');
}

$('div.customize').click(function(){
    $('#bgurlfrom').css('display','block');
    $('#_cancel').click(function(){$('.form-popup').css('display','none');});
});

$('#saveulr').click(function(){
    
    if($('#getimgulr').val() != ""){
        localStorage.setItem('bgImage',$('#getimgulr').val());
        $('#getimgulr').val('');
        window.location.reload();
    }else{
        alert('Url input is empty!');
    }
});
