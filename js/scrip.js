	 pos = $("#menuTop").position();
  	$(window).scroll(function(){
  		var posScroll = $(document).scrollTop();
  		if(parseInt(posScroll) > parseInt(pos.top)){
  			$("#menuTop").addClass('fixed');

  		}else{
  			$("#menuTop").removeClass('fixed');
  		}
  	});
  	function hienthi1(){
  		document.getElementById('ht1').style.display="block";
  		document.getElementById('ht2').style.display="block";
  		document.getElementById('ht3').style.display="block";
  		document.getElementById('ht4').style.display="block";
  		document.getElementById('ht5').style.display="block";
  		document.getElementById('an1').style.display="none";
  	}
  	function hienthi2(){
  		document.getElementById('ht6').style.display="block";
  		document.getElementById('ht7').style.display="block";
  		document.getElementById('ht8').style.display="block";
  		document.getElementById('ht9').style.display="block";
  		document.getElementById('ht10').style.display="block";
  		document.getElementById('an2').style.display="none";
  	}
  	function htDK(){
  		document.getElementById('dangnhap').style.display="none";
  		document.getElementById('dangky').style.display="block";
  	}
  	function htDN(){
  		document.getElementById('dangky').style.display="none";
  		document.getElementById('dangnhap').style.display="block";
  	}
  	function kiemtraDN(){
			var name = document.getElementById("email").value;
			var mk = document.getElementById("password").value;
			if(name == "" || mk == ""){
				alert("Điền đầy đủ thông tin ( tên đang nhập và mật khẩu)");
			}
			var regexMK = /(?=.{8,})/;
			if(!regexMK.test(mk)){
				document.getElementById("check_pass").innerHTML="? chiều dài tối thiểu 8 Ký tự ?";
			}else{
				document.getElementById("check_pass").innerHTML="";
			}

		}
		function kiemtraDK(){
			var ho = document.getElementById("ho").value;
			var name = document.getElementById("email").value;
			var mk = document.getElementById("password1").value;
			if(name == "" || mk == "" || ho ==""){
				alert("Điền đầy đủ thông tin ");
			}
			var regexMK = /(?=.{8,})/;
			if(!regexMK.test(mk)){
				document.getElementById("check_pass1").innerHTML="? chiều dài tối thiểu 8 Ký tự ?";
			}else{
				document.getElementById("check_pass1").innerHTML="";
			}

		}
		function ht_icon(){
			document.getElementById("icons").style.display="block";
		}

		function mota(){
			document.getElementById('ndMota').style.display="block";
			document.getElementById('ndDanhgia').style.display="none";

			document.getElementById('mota').style.background="#008000";
			document.getElementById('danhgia').style.background="#80bb35";
		}
		function danhgia(){
			document.getElementById('ndMota').style.display="none";
			document.getElementById('ndDanhgia').style.display="block";

			document.getElementById('mota').style.background="#80bb35";
			document.getElementById('danhgia').style.background="#008000";


		}
		