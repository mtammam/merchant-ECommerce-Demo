
function  redirectToProduct()
{
 
var object={
name:$('#js-itemName').html(),
img: $('#img-view').attr('src'),
desc:$('#js-desc').html(),
price:$('#js-price').html()

}

console.log(object)
sessionStorage.setItem("myproduct",JSON.stringify(object) );
window.location.href="ProductDetailes.html"
}

