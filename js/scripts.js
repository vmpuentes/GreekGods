$(function() {
  $("form.form-control").on('change',function() {
  //var selectedTotal = $("").val();
  $("select").change(function(){
     $("#q1").submit();
   }
  });
});
