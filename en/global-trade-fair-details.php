<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<? include('php/head-meta.php') ?>
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=FALSE"></script>
<script type="text/javascript">
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(22.282492, 114.161542),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
    
    var marker = new google.maps.Marker({
        position: map.getCenter(),
        map: map,
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

	<div class="hero-banner">
    	<img src="../images/exhibition/exhibition-banner.jpg" class="desktop"/>
        <img src="../images/exhibition/exhibition-banner-m.jpg" class="mob tablet"/>
    </div>
    
    <div class="inner-page">
    	<div class="holder">
        	<div class="breadcrumb">
            	<span class="pass">Home</span>
                <span class="pass">Exhibition</span>
                <span class="pass">Global Trade Fair Listing</span>
                <span class="now">Hong Kong International Jewelry Manufacturers' Show</span>
            </div>

        	<h2>Hong Kong International Jewelry Manufacturers' Show</h2>
            <div class="fairs-details-holder">
                <div class="fairs-detail">
                    <table>
                        <tr>
                            <th>Date:</th>
                            <td>20th March 2014</td>
                        </tr>
                        <tr>
                            <th>Location:</th>
                            <td>Hong Kong Convention & exhibition Centre, Hall 1</td>
                        </tr>
                        <tr>
                            <th>Organizer:</th>
                            <td>Hong Kong Jewelry Manufactureer's Association</td>
                        </tr>
                        <tr>
                            <th>Tel:</th>
                            <td>+852 2356 2992</td>
                        </tr>
                        <tr>
                            <th>Fax:</th>
                            <td>+852 2356 2992</td>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td><a href="mailto:hkjmashhow@jewlelry.org.hl">hkjmashhow@jewlelry.org.hl</a></td>
                        </tr>
                        <tr>
                            <th>Website:</th>
                            <td><a href="www.5starjew.com" target="_blank">www.5starjew.com</a></td>
                        </tr>
                    </table>
                    <div class="fairs-img">
                        <img src="../images/our-members/member-img-dummy.png" />
                    </div>
                    <h3 class="attachment-header">Attachments</h3>
                    <div class="attachment-list">
                        <div><p>something</p><div class="btn-download">Download</div></div>
                        <div><p>something</p><div class="btn-download">Download</div></div>
                        <div><p>something</p><div class="btn-download">Download</div></div>
                    </div>
                </div>
            </div>
            
        </div>
        
        <div class="map">
           <div id="map_canvas" style="width:100%; height:400px"></div>
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