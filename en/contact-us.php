<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<? include('php/head-meta.php'); ?>
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=FALSE"></script>
<script type="text/javascript">
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(22.282492, 114.161542),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapOptions2 = {
      center: new google.maps.LatLng(22.282492, 114.161542),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
    var map2 = new google.maps.Map(document.getElementById("map_canvas2"),
        mapOptions);
    
    var marker = new google.maps.Marker({
        position: map.getCenter(),
        map: map,
    });
    var marker2 = new google.maps.Marker({
        position: map2.getCenter(),
        map: map2,
    });
    var infowindow = new google.maps.InfoWindow();
    
    google.maps.event.addListener(marker, 'click', function() {         
        infowindow.setOptions({
        content: 'this is contwent',
        });                                                 
        infowindow.open(map,marker);
      });
  }
</script>
</head>
<body onload="initialize()">
<!-- start of header -->
<? include('php/header.php') ?>
<!-- end of header -->
<!-- start of wrapper -->
<div id="wrapper">

<div class="hero-banner nobanner">
</div>

<div class="inner-page">
	<div class="holder">
    	<div class="breadcrumb">
        	<span class="pass">Home</span>
            <span class="now">Contact Us</span>
        </div>
        <h2>Contact Us</h2>
        <div class="contact-us">
            <div class="withmap">
                <h3>Hong Kong Jewelry Manufacturers' Association </h3>
                <table>
                    <tr>
                        <th>Address</th>
                        <td>Unit G, 2/F., <br>
                            Kaiser Estate Phase 2,<br>
                            51 Man Yue Street, <br>
                            Hunghom,Kowloon,Hong Kong
                        </td>
                    </tr>
                    <tr>
                        <th>Tel</th>
                        <td>(852) 2766 3002</td>
                    </tr>
                    <tr>
                        <th>Fax</th>
                        <td>(852) 2362 3647</td>
                    </tr>
                    <tr>
                        <th>E-mail</th>
                        <td><a href="mailto:enquiry@jewelry.org.hk">enquiry@jewelry.org.hk</a></td>
                    </tr>        
                </table>
            </div><!--
            --><div class="map">
               <div id="map_canvas" style="width:100%; height:260px"></div>
            </div>

            <hr>

            <div class="withmap">
                <h3>Hong Kong Jewelry Manufacturers' Association </h3>
                <table>
                    <tr>
                        <th>Address</th>
                        <td>Unit G, 2/F., <br>
                            Kaiser Estate Phase 2,<br>
                            51 Man Yue Street, <br>
                            Hunghom,Kowloon,Hong Kong
                        </td>
                    </tr>
                    <tr>
                        <th>Tel</th>
                        <td>(852) 2766 3002</td>
                    </tr>
                    <tr>
                        <th>Fax</th>
                        <td>(852) 2362 3647</td>
                    </tr>
                    <tr>
                        <th>E-mail</th>
                        <td><a href="mailto:enquiry@jewelry.org.hk">enquiry@jewelry.org.hk</a></td>
                    </tr>        
                </table>
            </div><!--
            --><div class="map">
               <div id="map_canvas2" style="width:100%; height:260px"></div>
            </div>




            <h3>Please leave your contact information below</h3>

            <table class="form">
                <tr>
                    <th>Surname*</th>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <th>Given Name*</th>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <th>E-mail*</th>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <th>Company*</th>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <th>Address</th>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <th>Address2</th>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <th>Postal Code</th>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <th>Country*</th>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <th>Enquiry*</th>
                    <td><textarea></textarea></td>
                </tr>
            </table>

            <div class="save-container">   
                <div class="btn cancel"><a href="#">Reset</a></div>
                <div class="btn save"><a href="#">Submit</a></div>
            </div>
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