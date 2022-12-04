# Call Service
<table><tr><td colspan="2"><b>Compatibility</b></td></tr><tr><td><img src="https://drive.google.com/uc?export=view&id=1NbXQFq8_hw18wZSmQiAaH8PEkx0iN0ue" valign="center" all="AOZ" title="AOZ" /></td></tr></table>

Call a web service by RTC protocole ans send it parameters.The response of the remote server is intercepted and sand to a AOZ procedure to manage.
- _method&dollar;_ (optional): Should by one of theses values 
- **url&dollar;**: Web address of the web service
- _parameters&dollar;_ (optional): Parameters to send to the web service. ( ex. 
- _procSuccess&dollar;_ (optional): Name of the AOZ procedure to intercept the response of the remote server. Empty by default.
- _procError&dollar;_ (optional): Name of the AOZ procedure to intercept the error from the remote server. Empty by default.
- _aSync_ (optional): Set if the AOZ program must to wait the end of the request to continue. Yes, if ASYNC=0 (value by default). No, if ASYNC=1.
---
<p align="center"><img valign="middle" width="76px" src="https://drive.google.com/uc?export=view&id=1c2KO0LJpvMS9X9CAGV6dOfciR7OWhdKA" /></p>