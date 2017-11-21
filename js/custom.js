function show(x)
{
    var y=document.getElementById("section3");
    var z=y.children;
    for(let a of z)
    {
        $(a).removeClass('show');
    }
    $(x).addClass('show');
    y.appendChild(x);
}
function display(...x)
{
    var m=document.getElementById("section3");
    var c=m.children;
    for(let t of c)
    {
        $(t).removeClass('show');
    }
    for(let n of x)
    {
        m.appendChild(n);
       $(n).addClass('show');
    }
}
function hideall(...x)
{
    var t=document.getElementById("section3");
    var b=t.children;
    for(let a of b)
    {
        $(a).removeClass('show');
    }
    $(b[0]).addClass('show');
}
function deleteall(x)
{
    swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete all records of "+x.id,
        icon: "warning",
        buttons:true,
        dangerMode: true,
      })
      .then(willDelete => {
        if (willDelete) {
            let y=x.querySelector('table');
            let z=y.querySelector('tbody');
            let m=z.querySelectorAll('tr');
            if(m.length==0)
            {
                swal("No more records to delete");
            }
            else
            {
                for(let a of m)
            {
                z.removeChild(a);
            }
          swal("Deleted!", "Records have been successfully deleted", "success");
        }
        }
      });
    
}
function validate()
{
    var roll=$("#Roll");
    var name=$("#Name");
    var email=$("#email");
    var year=$("#year");
    if(roll.val()==''|name.val()==''||email.val()==''||year.val()=='')
    {
        return false;
    }
   if(roll.val().length<7||roll.val().length>15)
    {
             return false;
    }
    if(name.val().length<5||name.val().length>15)
    {
             return false;
    }
    if(year.val()<1||year.val()>5)
    {
             return false;
    }
    let x=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(x.test(email.val())==false)
    {
        return false;
    }
    return true;
}
function search(m)
{
    var childs=m.children;
    for(x of childs)
    {
        if((x.children[0].innerHTML)==($("#Roll").val()))
        {
            return false;
        }
    }
    return true;
}
let fun=(id)=>{
    let m=id.querySelector('tbody');
    if(validate())
    {
        if(search(m))
        {
            let tr=document.createElement('tr');
            let v=`<td>${$("#Roll").val()}</td>
            <td>${$("#Name").val()}</td>
            <td>${$("#email").val()}</td>
            <td>${$("#year").val()}</td>
            <td><button class="btn btn-warning" onclick="edit(this)" data-target="#mymodal" data-toggle="modal"><i class="fa fa-pencil"></i></button>
            <button class="btn btn-warning"  onclick="deleteR(this)"><i class="fa fa-times"></i></button></td>`;
            $(tr).html(v);
            m.appendChild(tr);
            swal({
                text:"Successfully inserted",
                icon:"success",
            });
        }
        else
        {
            swal({
                text:"Entry with same number already present",
            });
        }
        $("#mymodal").modal('hide');
    }
    else
    {
        swal({
            text:"Problem in validation.Recheck the data",
            icon:"error",
            dangerMode:true,
        });
    }
    
}
function deleteR(x){
    var m=x.parentNode.parentNode;
    swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete record of "+m.children[1].innerHTML,
        icon: "warning",
        buttons:true,
        dangerMode: true,
      })
      .then(value=>{
            if(value){
                var id=m.parentNode.parentNode;
                id.deleteRow(m.rowIndex);
            }
      });
    
}
function add(x)
{
    $("#sub").removeClass('hide');
    $("#save").addClass('hide');
    let y=`<form>
    <div class="form-group">
        <label for="Name">Name <sup>*</sup></label>
        <input type="text" id="Name" placeholder="Enter name" class="form-control" title="Must be 5 to 15 characters long">
    </div>
    <div class="form-group">
        <label for="Roll">Roll No. <sup>*</sup></label>
        <input type="text" id="Roll" placeholder="Enter Roll number" class="form-control" title="Must be 7 to 15 characters long">
    </div>
    <div class="form-group">
        <label for="email">Email id <sup>*</sup></label>
        <input type="email" id="email" placeholder="Enter email id" class="form-control" type="email" title="Valid email should be entered">
    </div>
    <div class="form-group">
        <label for="year">Year <sup>*</sup></label>
        <input type="number" id="year" placeholder="Enter year of study" class="form-control" title="Must be between 1 to 5">
    </div>
</form>`;
$(".modal-body").html(y);
    
    $("#sub").unbind().click(function(){
        fun(x);
    })
    let m=x.querySelector('tbody');
}
let save=(id)=>{
    if(validate()){
        
       id.children[0].innerHTML=$("#Roll").val();
       id.children[1].innerHTML=$("#Name").val();
       id.children[2].innerHTML=$("#email").val();
       id.children[3].innerHTML=$("#year").val();
       swal({
           text:"Successfully updated",
           icon:"success",
       });
       $("#mymodal").modal('hide');
    }
    else
    {
        swal({
            text:"Problem in validation.Kindly check entered data",
            icon:"error",
        });
    }
}
function edit(x)
{
    $("#sub").addClass('hide');
    $("#save").removeClass('hide');
     let mycell=x.parentNode.parentNode.children;
    let y=`<form>
    <div class="form-group">
        <label for="Name">Name <sup>*</sup></label>
        <input type="text" id="Name" placeholder="Enter name"  class="form-control" title="Must be 5 to 15 characters long">
    </div>
    <div class="form-group">
        <label for="Roll">Roll No. <sup>*</sup></label>
        <input type="text" id="Roll" placeholder="Enter Roll number" class="form-control" title="Must be 7 to 15 characters long">
    </div>
    <div class="form-group">
        <label for="email">Email id <sup>*</sup></label>
        <input type="email" id="email" placeholder="Enter email id" class="form-control" type="email" title="Valid email should be entered">
    </div>
    <div class="form-group">
        <label for="year">Year <sup>*</sup></label>
        <input type="number" id="year" placeholder="Enter year of study" class="form-control" title="Must be between 1 to 5">
    </div>
</form>`;
$(".modal-body").html(y);
$("#save").unbind().click(function(){save(x.parentNode.parentNode)});//Nodex.parentNode.parentNode.parentNode.parentNode.parentNode.id));
$("#Name").val(mycell[1].innerHTML);
$("#Roll").val(mycell[0].innerHTML);
$("#email").val(mycell[2].innerHTML);
$("#year").val(mycell[3].innerHTML);
}