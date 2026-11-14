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
	'hdconfigure_webapps',
	'hdconfigure_webapps_build_page.ts'
    );
    const configUrl = pathToFileURL(configPath).href;
    const hdui = await import(configUrl);
    const result = hdui.generate_html_page(













	



	"/style.css",
	"TruckAds",
	"./menu/",



	
	hdui.subheader("Menu") +
    	    hdui.button("/home/", "home") +
	    hdui.button("/register/", "Place Ad") +
	    hdui.button("/register/", "Register Truck")













	

    );
    console.log(result);
})().catch(console.error);

