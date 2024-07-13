// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world
import wixWindow from 'wix-window';
$w.onReady(function () {
   
    function showGallery(selectedGalleryId) {
      $w('#gridGallery1').hide();
      $w('#gridGallery2').hide();
      $w('#gridGallery3').hide();
      $w('#gridGallery4').hide();

      $w(selectedGalleryId).show();
    }
    $w("#text55").onClick(() => {
      showGallery('#gridGallery2');
    });
  
    $w("#text56").onClick(() => {
      showGallery('#gridGallery3');
    });
  
    $w("#text57").onClick(() => {
      showGallery('#gridGallery4');
    });
  
  });