
$w.onReady(function () {
   
  function showGallery(selectedGalleryId) {
    $w('#gridGallery1').hide();
    $w('#gridGallery2').hide();
    $w('#gridGallery3').hide();
    $w('#gridGallery4').hide();

    setTimeout(() => {
      $w(selectedGalleryId).show("fade", { duration: 200 });
  }, 1200);
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

