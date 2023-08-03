/*@****************************************************************************
*
*   █████╗  ██████╗ ███████╗    ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗
*  ██╔══██╗██╔═══██╗╚══███╔╝    ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗
*  ███████║██║   ██║  ███╔╝     ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║
*  ██╔══██║██║   ██║ ███╔╝      ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║
*  ██║  ██║╚██████╔╝███████╗    ███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝
*  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝
*
****************************************************************************@*/
//
// HTML Instrutions Set For AOZ
// By Baptiste Bideaux
// Version 1.0
// 12/10/2020
// (c) AOZ Studio 2020
//
// Compiled with AOZ Transpiler Version 14.03 on the 
//

function v1_0_aozhtml( aoz, args )
{
	this.aoz=aoz;
	this.parent=this;
	this.root=this;
	this.manifest=JSON.parse(atob('eyJ2ZXJzaW9uIjoiOSIsInZlcnNpb25Nb2R1bGUiOiIxIiwiaW5mb3MiOnsiYXBwbGljYXRpb25OYW1lIjoiSFRNTCBJbnN0cnV0aW9ucyBTZXQgRm9yIEFPWiIsImF1dGhvciI6IkJ5IEJhcHRpc3RlIEJpZGVhdXgiLCJ2ZXJzaW9uIjoiVmVyc2lvbiAxLjAiLCJkYXRlIjoiMTIvMTAvMjAyMCIsImNvcHlyaWdodCI6IihjKSBBT1ogU3R1ZGlvIDIwMjAiLCJzdGFydCI6ImFvemh0bWwuYW96IiwibmFtZSI6ImFvemh0bWwifSwiY29tcGlsYXRpb24iOnsibm9XYXJuaW5nIjpbImluc3RydWN0aW9uX25vdF9pbXBsZW1lbnRlZCJdLCJpbmNsdWRlUGF0aHMiOltdLCJzeW50YXgiOiJhb3oifSwiZXJyb3JzIjp7fSwiYm9vdFNjcmVlbiI6eyJhY3RpdmUiOmZhbHNlLCJ3YWl0U291bmRzIjpmYWxzZSwiY2xpY2tTb3VuZHMiOmZhbHNlfX0='));
	this.vars=typeof args=='undefined'?{}:args;
	this.contextName='v1_0_aozhtml';
	this.aoz[ "module" + "Aozhtml" ]=this;
	this.aoz.finalWait++;
	

this.blocks=[];
	this.blocks[0]=function(aoz,vars)
	{
		// From source: C:/AOZ Studio/AOZ_Studio/app/aoz/languages/v1_0/aozhtml/aozhtml.aoz
		aoz.sourcePos="0:29:0";
		// Javascript
		aozhtml_initialize( this );
		// End Javascript
		return{type:0}
	};
	this.blocks[1]=function(aoz,vars)
	{
		return{type:0};
	};
	this.aoz.run(this,0,null);
};
