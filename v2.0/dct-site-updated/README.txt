DCT Home Improvement - Updated frontend

This version preserves the important integrations from the current site:
- [wpforms id="35"]
- [trustindex no-registration=google]
- Existing phone, email, Facebook, TikTok and Google Maps.
- Existing image paths in images/items/.

Files:
index.html
css/style.css
js/data.js
js/scripts.js

IMPORTANT:
The two WordPress shortcodes will only render when this HTML is used through the WordPress setup that currently processes those shortcodes.
The ZIP does NOT include the images folder because it was not uploaded in this chat. Keep the existing images/ directory on the server.

Before replacing production:
1. Back up the existing site/theme.
2. Test this version in staging/local.
3. Confirm all image filenames match your current images/items/ folder.
4. Confirm WPForms form ID 35 is still the form you want.
