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
// The 3D Module
// By Baptiste Bideaux
// Version 1
// 20/03/2020
// (c) AOZ Studio 2020 - Open Source - licence to come ;)
//
// Compiled with AOZ Transpiler Version 14.03 on the 
//

function v1_0_td( aoz, args )
{
	this.aoz=aoz;
	this.parent=this;
	this.root=this;
	this.manifest=JSON.parse(atob('eyJ2ZXJzaW9uIjoiOSIsInZlcnNpb25Nb2R1bGUiOiIxIiwiaW5mb3MiOnsiYXBwbGljYXRpb25OYW1lIjoiVGhlIDNEIE1vZHVsZSIsImF1dGhvciI6IkJ5IEJhcHRpc3RlIEJpZGVhdXgiLCJ2ZXJzaW9uIjoiVmVyc2lvbiAxIiwiZGF0ZSI6IjIwLzAzLzIwMjAiLCJjb3B5cmlnaHQiOiIoYykgQU9aIFN0dWRpbyAyMDIwIC0gT3BlbiBTb3VyY2UgLSBsaWNlbmNlIHRvIGNvbWUgOykiLCJzdGFydCI6InRkLmFveiIsIm5hbWUiOiJURCJ9LCJjb21waWxhdGlvbiI6eyJub1dhcm5pbmciOlsiaW5zdHJ1Y3Rpb25fbm90X2ltcGxlbWVudGVkIl0sImVycm9ycyI6eyJlbiI6W10sImZyIjpbXX0sImluY2x1ZGVQYXRocyI6W10sInN5bnRheCI6ImFveiJ9LCJib290U2NyZWVuIjp7ImFjdGl2ZSI6ZmFsc2UsIndhaXRTb3VuZHMiOmZhbHNlLCJjbGlja1NvdW5kcyI6ZmFsc2V9LCJlcnJvcnMiOnt9fQ=='));
	this.vars=typeof args=='undefined'?{}:args;
	this.contextName='v1_0_td';
	this.aoz[ "module" + "Td" ]=this;
	this.aoz.finalWait++;
	

this.blocks=[];
	this.blocks[0]=function(aoz,vars)
	{
		// From source: C:/AOZ Studio/AOZ_Studio/app/aoz/languages/v1_0/td/td.aoz
		aoz.sourcePos="0:74:0";
		// Javascript
		this.aoz.TD = this;
		this.aoz.TD.utilities = aoz.utilities;
		this.aoz.TD.banks = aoz.banks;	
		this.context = new AOZContext( this.aoz, this.aoz.currentContextName, { sorted: false } );
		// End Javascript
		return{type:0}
	};
	this.blocks[1]=function(aoz,vars)
	{
		return{type:0};
	};
	this.aoz.run(this,0,null);
};