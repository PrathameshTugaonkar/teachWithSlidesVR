
import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot('teachWithSlidesVR', {
      photos: [
        {uri: 'https://pub-static.fotor.com/static/web/site/features/backgrounds/images/Fotor-wall-background-image-6.jpg', title: '360 World', format: '3DTB'},
        {uri: 'https://image.shutterstock.com/image-photo/nature-background-table-wood-product-600w-285662423.jpg', title: '360 World', format: '3DTB'},
        {uri: './static_assets/react360-first-slide.jpg', title: '360 World', format: '3DTB'},
        // Add your own 180 / 360 photos to this array,
        // with an associated title and format
      ],
    }),
    r360.getDefaultSurface(),
  );
}

window.React360 = {init};
