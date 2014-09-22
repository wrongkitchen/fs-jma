<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<? include('php/head-meta.php'); ?>

</head>
<body>
<!-- start of header -->
<? include('php/header.php') ?>
<!-- end of header -->
<!-- start of wrapper -->
<div id="wrapper">

<div class="hero-banner">
	<img src="../images/member-zone/member-zone-banner.jpg" class="desktop"/>
    <img src="../images/member-zone/member-zone-banner-m.jpg" class="mob tablet"/>
</div>

<div class="inner-page">
	<div class="holder">
    	<div class="breadcrumb">
        	<span class="pass">Home</span>
            <span class="now">Member Zone</span>
        </div>
    	
        <div class="member-login">        
    		<h2>Member Zone
                <span>Sign in to continue HKJMA member zone</span>
            </h2>
            
            <input type="text" placeholder="Membership no."/>
            <input type="text" placeholder="Password" />

            <div class="login-helper">
            	<a href="#">Contact Us</a>
                <a href="#" class="forgot-pw">Forgot Password?</a>
            </div>
            <a href="member-zone-main.php"><div class="btn login">Login</div></a>
            <hr />
            <span><a href="#" style="color:#000">Not a Member Yet?</a></span>
            <div class="btn download-form">Download Application Form</div>
        </div>
    </div>
</div>

<!-- end of wrapper -->
<!-- start of footer -->
<? include('php/footer.php') ?>
<!-- end of footer -->
<!--<script type="text/javascript" src="../js/ga.js"></script>-->
</body>
</html>