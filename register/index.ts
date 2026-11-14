/*
Copyright (C) 2026 by Theron Kauk and John Morris Beck <hdconfigure.direct@gmail.com> 
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE 
INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE 
FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS 
OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING 
OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
import path from 'path';
import os from 'os';
import { pathToFileURL } from 'url';
(async () => {
  const configPath = path.join(
    os.homedir(),
        '.config',
    'hdconfigure',
    'tools',
    'git',
    'hdconfigure',
    'hdconfigure__webapps',
    'hdconfigure_dynamic_webapps_build_page.ts'
  );
  const configUrl = pathToFileURL(configPath).href;
  const hdui = await import(configUrl);
  const result = hdui.generate_html_page(










	"/style.css",
	"TruckAds",
	"./menu/",





    hdui.subheader("YOU CAN GET ADS ON TRUCKS?") +
    hdui.image("/assets/trucknight.png") +
    hdui.subheader("Email: hd.configure.direct@gmail.com") +
    hdui.button("mailto:hdconfigure.direct+flightdeck_booking@gmail.com","Open Email App") +
   hdui.text(
        "To register with us send us your name, the company you work with, and whether you are a truck for rent or if you want your ad on a billboard.If you are an advertiser let us know: how long do you want the ads for, how many trucks are you looking to put ads on, do you have pictures of what kind of ad you want, etcetera etcetera. If you are a driver, let us know the type of truck you have, how often you drive, and what states you most frequently drive in.")










      );
console.log(result);
})().catch(console.error);


