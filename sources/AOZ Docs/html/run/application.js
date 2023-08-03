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
// AOZ Docs
// Baptiste Bideaux
// 1.0.0
// 
// Copyright (c) 2022 AOZ Studio
//
// Compiled with AOZ Transpiler Version 14.03 on the 11/12/2022-14:28:13
//
function Application( canvasId, args )
{
	this.root=this;
	this.parent=this;
	this.contextName='application';
	this.manifest=JSON.parse(atob('eyJ2ZXJzaW9uIjoiOSIsImluZm9zIjp7InR5cGUiOiJwYyIsImFwcGxpY2F0aW9uTmFtZSI6IkFPWiBEb2NzIiwiYXV0aG9yIjoiQmFwdGlzdGUgQmlkZWF1eCIsInZlcnNpb24iOiIxLjAuMCIsImRhdGUiOiIiLCJjb3B5cmlnaHQiOiJDb3B5cmlnaHQgKGMpIDIwMjIgQU9aIFN0dWRpbyIsInN0YXJ0IjoiQU9aIERvY3MuYW96IiwidGVtcGxhdGUiOiJ0ZW1wbGF0ZXMvdGVtcGxhdGVfY3Jvc3MifSwiY29tcGlsYXRpb24iOnsicGxhdGZvcm0iOiJhb3oiLCJrZXltYXAiOiJhb3oiLCJtYWNoaW5lIjoibW9kZXJuIiwic3BlZWQiOiJmYXN0Iiwic3ludGF4IjoiZW5oYW5jZWQiLCJlbmRpYW4iOiJsaXR0bGUiLCJub1dhcm5pbmciOltdLCJkaXNwbGF5RW5kQWxlcnQiOnRydWUsImRpc3BsYXlFcnJvckFsZXJ0Ijp0cnVlLCJ1c2VMb2NhbFRhYnMiOnRydWUsInVzZUFzc2V0c1Jlc291cmNlcyI6dHJ1ZSwiaW5jbHVkZVBhdGhzIjpbXX0sImRpc3BsYXkiOnsidHZTdGFuZGFyZCI6InBhbCIsInJlZnJlc2hSYXRlIjo2MCwicmVzb2x1dGlvbiI6IjE5MjB4MTA4MCIsIndpZHRoIjoxOTIwLCJoZWlnaHQiOjEwODAsImJhY2tncm91bmQiOiJjb2xvciIsImJhY2tncm91bmRDb2xvciI6IiMwMDAwMDAiLCJib2R5QmFja2dyb3VuZENvbG9yIjoiIzAwMDAwMCIsImJvZHlCYWNrZ3JvdW5kSW1hZ2UiOiIuL3J1bnRpbWUvcmVzb3VyY2VzL3N0YXJfbmlnaHQuanBlZyIsInNjYWxlWCI6MSwic2NhbGVZIjoxLCJzY3JlZW5TY2FsZSI6MSwiZnBzIjpmYWxzZSwiZnBzRm9udCI6IjEycHggVmVyZGFuYSIsImZwc0NvbG9yIjoiI0ZGRkYwMCIsImZwc1giOjEwLCJmcHNZIjoxNiwiZnVsbFBhZ2UiOnRydWUsImZ1bGxTY3JlZW4iOnRydWUsImtlZXBQcm9wb3J0aW9ucyI6dHJ1ZSwiZnVsbFNjcmVlbkljb24iOmZhbHNlLCJmdWxsU2NyZWVuSWNvblgiOi0zNCwiZnVsbFNjcmVlbkljb25ZIjoyLCJmdWxsU2NyZWVuSWNvbkltYWdlIjoiLi9ydW50aW1lL3Jlc291cmNlcy9mdWxsX3NjcmVlbi5wbmciLCJzbWFsbFNjcmVlbkljb25JbWFnZSI6Ii4vcnVudGltZS9yZXNvdXJjZXMvc21hbGxfc2NyZWVuLnBuZyIsInNtb290aGluZyI6dHJ1ZSwib3JpZW50YXRpb25fZGV0ZWN0aW9uIjoibGFuZHNjYXBlIiwicmVuZGVyZXIiOiJjYW52YXMifSwiYm9vdFNjcmVlbiI6eyJhY3RpdmUiOnRydWUsIndhaXRTb3VuZHMiOjAsImNsaWNrU291bmRzIjpmYWxzZX0sImNvbGxpc2lvbnMiOnsibWV0aG9kIjoiZmluZSIsInByZWNpc2lvbiI6NzUsImFscGhhVGhyZXNob2xkIjoxfSwicmFpbmJvd3MiOnsibW9kZSI6InNsb3cifSwiZm9udHMiOnsibGlzdEZvbnRzIjoiUEMiLCJhbWlnYSI6W10sImdvb2dsZSI6W119LCJzb3VuZHMiOnsibW9kZSI6IlBDIiwidm9sdW1lIjoxLCJwcmVsb2FkIjp0cnVlLCJudW1iZXJPZlNvdW5kc1RvUHJlbG9hZCI6MzIsInNvdW5kUG9vbFNpemUiOjMyfSwiZ2FtZXBhZCI6eyJtYXBwaW5nIjp7InVwIjoiQXJyb3dVcCIsImRvd24iOiJBcnJvd0Rvd24iLCJsZWZ0IjoiQXJyb3dMZWZ0IiwicmlnaHQiOiJBcnJvd1JpZ2h0IiwiZmlyZSI6IlNwYWNlIn19LCJmaWxlU3lzdGVtIjp7ImNhc2VTZW5zaXRpdmUiOmZhbHNlfSwiZGVmYXVsdCI6eyJzY3JlZW4iOnsieCI6MCwieSI6MCwid2lkdGgiOjE5MjAsImhlaWdodCI6MTA4MCwibnVtYmVyT2ZDb2xvcnMiOjY0LCJwaXhlbE1vZGUiOiJsb3dyZXMiLCJwYWxldHRlIjpbIiMwMDAwMDAiLCIjRkZGRkZGIiwiI0QxRDFEMSIsIiNBMkEyQTIiLCIjNzM3MzczIiwiIzQ0NDQ0NCIsIiNGRjAwMDAiLCIjRDEwMDAwIiwiI0EyMDAwMCIsIiM3MzAwMDAiLCIjNDQwMDAwIiwiIzAwRkYwMCIsIiMwMEQxMDAiLCIjMDBBMjAwIiwiIzAwNzMwMCIsIiMwMDQ0MDAiLCIjRkZGRjAwIiwiI0QxRDEwMCIsIiNBMkEyMDAiLCIjNzM3MzAwIiwiIzQ0NDQwMCIsIiNGRjdGMDAiLCIjRTI3MTAwIiwiI0M0NjIwMCIsIiNBNjUzMDAiLCIjODg0NDAwIiwiIzAwMDBGRiIsIiMwMDAwRDEiLCIjMDAwMEEyIiwiIzAwMDA3MyIsIiMwMDAwNDQiLCIjMDBGRkZGIiwiIzAwRDFEMSIsIiMwMEEyQTIiLCIjMDA3MzczIiwiIzAwNDQ0NCIsIiNGRjAwRkYiLCIjRDEwMEQxIiwiI0EyMDBBMiIsIiM3MzAwNzMiLCIjNDQwMDQ0IiwiI0ZGQTEwMCIsIiNGRkIzMTIiLCIjRkZDNjI1IiwiI0ZGRDgzNyIsIiNGRkVCNEEiLCIjRkZGRTVEIiwiIzAwMjk2NSIsIiMxMjM5NzUiLCIjMjQ0OTg1IiwiIzM2NTk5NSIsIiM0ODY5QTUiLCIjNUE3OUI1IiwiI0JGNzE3RiIsIiNCMjY3NzMiLCIjQTQ1RDY2IiwiIzk3NTM1OSIsIiM4OTQ5NEMiLCIjN0IzRjNGIiwiIzgyNTJCNCIsIiM2MjNFODciLCIjNDEyOTVBIiwiIzIxMTUyRCIsIiMwMDAwMDAiXSwid2luZG93Ijp7IngiOjAsInkiOjAsIndpZHRoIjo4MCwiaGVpZ2h0IjoyNSwiYm9yZGVyIjowLCJwYXBlciI6MCwicGVuIjoxLCJiYWNrZ3JvdW5kIjoib3BhcXVlIiwiZm9udCI6eyJuYW1lIjoiSUJNIFBsZXggTW9ubyIsInR5cGUiOiJnb29nbGUiLCJoZWlnaHQiOjI0fSwiY3Vyc29yT24iOnRydWUsImN1cnNvckltYWdlIjoiLi9ydW50aW1lL3Jlc291cmNlcy9jdXJzb3JfcGMucG5nIiwiY3Vyc29yQ29sb3JzIjpbeyJyIjo2OCwiZyI6NjgsImIiOjAsImEiOjEyOH0seyJyIjoxMzYsImciOjEzNiwiYiI6MCwiYSI6MTI4fSx7InIiOjE4NywiZyI6MTg3LCJiIjowLCJhIjoxMjh9LHsiciI6MjIxLCJnIjoyMjEsImIiOjAsImEiOjEyOH0seyJyIjoyMzgsImciOjIzOCwiYiI6MCwiYSI6MTI4fSx7InIiOjI1NSwiZyI6MjU1LCJiIjozNCwiYSI6MTI4fSx7InIiOjI1NSwiZyI6MjU1LCJiIjoxMzYsImEiOjEyOH0seyJyIjoyNTUsImciOjI1NSwiYiI6MjA0LCJhIjoxMjh9LHsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYSI6MTI4fSx7InIiOjE3MCwiZyI6MTcwLCJiIjoyNTUsImEiOjEyOH0seyJyIjoxMzYsImciOjEzNiwiYiI6MjA0LCJhIjoxMjh9LHsiciI6MTAyLCJnIjoxMDIsImIiOjE3MCwiYSI6MTI4fSx7InIiOjM0LCJnIjozNCwiYiI6MTAyLCJhIjoxMjh9LHsiciI6MCwiZyI6MCwiYiI6NjgsImEiOjEyOH0seyJyIjowLCJnIjowLCJiIjoxNywiYSI6MTI4fSx7InIiOjAsImciOjAsImIiOjAsImEiOjEyOH1dfX19fQ=='));
	var options =
	{
		manifest: this.manifest,
		sources: JSON.parse(atob('W3sicGF0aCI6IkQ6L1Byb2dyYW1zL0FPWl9TdHVkaW9fU0UvbXlfYW96X2FwcGxpY2F0aW9ucy9BT1ogRG9jcy9BT1ogRG9jcy5hb3oiLCJzb3VyY2UiOiJMb2FkIEFzc2V0IFwiaHR0cHM6Ly9jZG4ubWV0cm91aS5vcmcudWEvdjQvY3NzL21ldHJvLWFsbC5taW4uY3NzXCIsIFwibWV0cm8tY3NzXCJcclxuTG9hZCBBc3NldCBcImh0dHBzOi8vY2RuLm1ldHJvdWkub3JnLnVhL3Y0L2pzL21ldHJvLm1pbi5qc1wiLCBcIm1ldHJvLWpzXCJcclxuTG9hZCBBc3NldCBcInd3dy9zdHlsZXMvcHJpc20uY3NzXCIsIFwicHJpc20tY3NzXCJcclxuTG9hZCBBc3NldCBcImh0dHBzOi8vc3RhY2tlZGl0LmlvL3N0eWxlLmNzc1wiLCBcInN0YWNrZWRpdC1jc3NcIlxyXG5Mb2FkIEFzc2V0IFwiaHR0cHM6Ly91bnBrZy5jb20vc3RhY2tlZGl0LWpzQDEuMC43L2RvY3MvbGliL3N0YWNrZWRpdC5taW4uanNcIiwgXCJzdGFja2VkaXQtanNcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2xpYnMvc3RyaW5nLXV0aWxzLmpzXCIsIFwic3RyaW5nX3V0aWxzXCJcclxuTG9hZCBBc3NldCBcInd3dy9qcy9saWJzL21kLXBhcnNlci5qc1wiLCBcIm1kLXBhcnNlclwiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvanMvbGlicy9wcmlzbS5qc1wiLCBcInByaXNtLWpzXCJcclxuTG9hZCBBc3NldCBcInd3dy9qcy9saWJzL2xhbmd1YWdlcy9hb3oubWluLmpzXCIsIFwiYW96XCJcclxuTG9hZCBBc3NldCBcInd3dy9zdHlsZXMvZm9udHMvZm9udC5jc3NcIiwgXCJmb250LWNzc1wiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL2ZvbnRzL2R5c2xleGlhL3N0eWxlc2hlZXQuY3NzXCIsIFwiZHlzLWNzc1wiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL2dsb2JhbC5jc3NcIiwgXCJnbG9iYWwtY3NzXCJcclxuXHJcbkxvYWQgQXNzZXQgXCJ3d3cvaHRtbC9pbmRleC5odG1sXCIsIFwiaW5kZXhcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2luZGV4LmpzXCIsIFwiaW5kZXgtanNcIlxyXG5cclxuSW5jbHVkZSBcImluY2x1ZGVzL2xhbmd1YWdlL21kLXJlYWRlci5hb3ppbmNcIlxyXG5JbmNsdWRlIFwiaW5jbHVkZXMvbGFuZ3VhZ2UvdG9hc3QuYW96aW5jXCJcclxuSW5jbHVkZSBcImluY2x1ZGVzL2FwcC5hb3ppbmNcIlxyXG5cclxuTE9DQUwgPSBUcnVlXHJcbkdsb2JhbCBMT0NBTFxyXG5XYWl0IDIgOiBNQUlOIDogV2FpdFxyXG5cbmNsYXBmaW5cbiIsIm51bWJlciI6MCwicGFyZW50IjpudWxsLCJvZmZzZXRMaW5lcyI6MH0seyJwYXRoIjoiaW5jbHVkZXMvbGFuZ3VhZ2UvbWQtcmVhZGVyLmFvemluYyIsInNvdXJjZSI6Ikluc3RydWN0aW9uIFN0YWNrRWRpdCBPcGVuLCBVUkwkLCBPblN1Y2Nlc3MkPVwiXCIsIE9uRXJyb3IkPVwiXCJcclxue1xyXG5cdCNlcnJvcnNcclxuXHRpZiggTURQYXJzZXIgPT0gdW5kZWZpbmVkIClcclxuXHR7XHJcblx0XHR0aHJvdyBcIm1kX3BhcnNlcl9qc19ub3RfbG9hZGVkXCI7XHJcblx0fVxyXG5cclxuXHRpZiggJVVSTCQgPT0gdW5kZWZpbmVkIHx8ICVVUkwkID09ICcnIClcclxuXHR7XHJcblx0XHR0aHJvdyBcIm1kX2xvYWRfdXJsX21pc3NlZFwiO1xyXG5cdH1cclxuXHJcblx0TURQYXJzZXIub3BlbiggJVVSTCQsICVPblN1Y2Nlc3MkLCAlT25FcnJvciQgKTtcclxufVxyXG5FbmQgSW5zdHJ1Y3Rpb25cclxuXHJcblxyXG5JbnN0cnVjdGlvbiBTdGFja0VkaXQgU2hvdywgQ09ERSQsIEhUTUxfSUQkXHJcbntcclxuXHQjZXJyb3JzXHJcblx0aWYoIE1EUGFyc2VyID09IHVuZGVmaW5lZCApXHJcblx0e1xyXG5cdFx0dGhyb3cgXCJtZF9wYXJzZXJfanNfbm90X2xvYWRlZFwiO1xyXG5cdH1cclxuXHJcblx0aWYoICVDT0RFJCA9PSB1bmRlZmluZWQgfHwgJUNPREUkID09ICcnIClcclxuXHR7XHJcblx0XHR0aHJvdyBcIm5vX21hcmtkb3duX2NvZGVfdG9fcGFyc2VcIjtcclxuXHR9XHJcblxyXG5cdGlmKCBTdGFja2VkaXQgPT0gdW5kZWZpbmVkIClcclxuXHR7XHJcblx0XHR0aHJvdyBcInN0YWNrZWRpdF9saWJfbm90X2xvYWRlZFwiO1xyXG5cdH1cclxuXHJcblx0TURQYXJzZXIuc2hvdyggJUNPREUkLCAlSFRNTF9JRCQgKTtcclxufVxyXG5FbmQgSW5zdHJ1Y3Rpb25cclxuXHJcbkluc3RydWN0aW9uIFN0YWNrRWRpdCBFZGl0LCBDT0RFJCwgT25DaGFuZ2UkID0gXCJcIiwgT25DbG9zZSQgPSBcIlwiXHJcbntcclxuXHQjZXJyb3JzXHJcblx0aWYoIE1EUGFyc2VyID09IHVuZGVmaW5lZCApXHJcblx0e1xyXG5cdFx0dGhyb3cgXCJtZF9wYXJzZXJfanNfbm90X2xvYWRlZFwiO1xyXG5cdH1cclxuXHJcblx0aWYoICVDT0RFJCA9PSB1bmRlZmluZWQgfHwgJUNPREUkID09ICcnIClcclxuXHR7XHJcblx0XHR0aHJvdyBcIm5vX21hcmtkb3duX2NvZGVfdG9fcGFyc2VcIjtcclxuXHR9XHJcblxyXG5cdGlmKCBTdGFja2VkaXQgPT0gdW5kZWZpbmVkIClcclxuXHR7XHJcblx0XHR0aHJvdyBcInN0YWNrZWRpdF9saWJfbm90X2xvYWRlZFwiO1xyXG5cdH1cclxuXHJcblx0TURQYXJzZXIuZWRpdCggJUNPREUkLCAlT25DaGFuZ2UkLCAlT25DbG9zZSQgKTtcclxufVxyXG5FbmQgSW5zdHJ1Y3Rpb25cclxuIiwibnVtYmVyIjoxLCJwYXJlbnQiOnsicGF0aCI6IkQ6L1Byb2dyYW1zL0FPWl9TdHVkaW9fU0UvbXlfYW96X2FwcGxpY2F0aW9ucy9BT1ogRG9jcy9BT1ogRG9jcy5hb3oiLCJzb3VyY2UiOiJMb2FkIEFzc2V0IFwiaHR0cHM6Ly9jZG4ubWV0cm91aS5vcmcudWEvdjQvY3NzL21ldHJvLWFsbC5taW4uY3NzXCIsIFwibWV0cm8tY3NzXCJcclxuTG9hZCBBc3NldCBcImh0dHBzOi8vY2RuLm1ldHJvdWkub3JnLnVhL3Y0L2pzL21ldHJvLm1pbi5qc1wiLCBcIm1ldHJvLWpzXCJcclxuTG9hZCBBc3NldCBcInd3dy9zdHlsZXMvcHJpc20uY3NzXCIsIFwicHJpc20tY3NzXCJcclxuTG9hZCBBc3NldCBcImh0dHBzOi8vc3RhY2tlZGl0LmlvL3N0eWxlLmNzc1wiLCBcInN0YWNrZWRpdC1jc3NcIlxyXG5Mb2FkIEFzc2V0IFwiaHR0cHM6Ly91bnBrZy5jb20vc3RhY2tlZGl0LWpzQDEuMC43L2RvY3MvbGliL3N0YWNrZWRpdC5taW4uanNcIiwgXCJzdGFja2VkaXQtanNcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2xpYnMvc3RyaW5nLXV0aWxzLmpzXCIsIFwic3RyaW5nX3V0aWxzXCJcclxuTG9hZCBBc3NldCBcInd3dy9qcy9saWJzL21kLXBhcnNlci5qc1wiLCBcIm1kLXBhcnNlclwiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvanMvbGlicy9wcmlzbS5qc1wiLCBcInByaXNtLWpzXCJcclxuTG9hZCBBc3NldCBcInd3dy9qcy9saWJzL2xhbmd1YWdlcy9hb3oubWluLmpzXCIsIFwiYW96XCJcclxuTG9hZCBBc3NldCBcInd3dy9zdHlsZXMvZm9udHMvZm9udC5jc3NcIiwgXCJmb250LWNzc1wiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL2ZvbnRzL2R5c2xleGlhL3N0eWxlc2hlZXQuY3NzXCIsIFwiZHlzLWNzc1wiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL2dsb2JhbC5jc3NcIiwgXCJnbG9iYWwtY3NzXCJcclxuXHJcbkxvYWQgQXNzZXQgXCJ3d3cvaHRtbC9pbmRleC5odG1sXCIsIFwiaW5kZXhcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2luZGV4LmpzXCIsIFwiaW5kZXgtanNcIlxyXG5cclxuSW5jbHVkZSBcImluY2x1ZGVzL2xhbmd1YWdlL21kLXJlYWRlci5hb3ppbmNcIlxyXG5JbmNsdWRlIFwiaW5jbHVkZXMvbGFuZ3VhZ2UvdG9hc3QuYW96aW5jXCJcclxuSW5jbHVkZSBcImluY2x1ZGVzL2FwcC5hb3ppbmNcIlxyXG5cclxuTE9DQUwgPSBUcnVlXHJcbkdsb2JhbCBMT0NBTFxyXG5XYWl0IDIgOiBNQUlOIDogV2FpdFxyXG5cbmNsYXBmaW5cbiIsIm51bWJlciI6MCwicGFyZW50IjpudWxsLCJvZmZzZXRMaW5lcyI6MH0sIm9mZnNldExpbmVzIjoxNn0seyJwYXRoIjoiaW5jbHVkZXMvbGFuZ3VhZ2UvdG9hc3QuYW96aW5jIiwic291cmNlIjoiSW5zdHJ1Y3Rpb24gVG9hc3QsIFRleHQkLCBUeXBlJD1cInByaW1hcnlcIiwgU2hvd1RvcCA9IEZhbHNlLCBEdXJhdGlvbiA9IDMwMDAsIENhbGxCYWNrJD1cIlwiXHJcbntcclxuXHQjZXJyb3JzXHJcblx0aWYoIE1ldHJvID09IHVuZGVmaW5lZCApXHJcblx0e1xyXG5cdFx0dGhyb3cgXCJtZXRyb191aV9saWJfbm90X2xvYWRlZFwiO1xyXG5cdH1cclxuXHJcblx0dmFyIG9wdGlvbnMgPVxyXG5cdHtcclxuXHQgICAgY2FsbGJhY2s6IE1ldHJvLm5vb3AsXHJcblx0ICAgIHRpbWVvdXQ6ICVEdXJhdGlvbixcclxuXHQgICAgZGlzdGFuY2U6IDIwLFxyXG5cdCAgICBzaG93VG9wOiAlU2hvd1RvcCxcclxuXHQgICAgY2xzVG9hc3Q6IFwiXCJcclxuXHR9XHJcblxyXG5cdGlmKCAlQ2FsbEJhY2skICE9ICcnIClcclxuXHR7XHJcbiBcdFx0b3B0aW9ucy5jYWxsYmFjayA9IGZ1bmN0aW9uKClcclxuXHRcdHtcclxuXHRcdFx0YXBwbGljYXRpb24uYW96LnJ1blByb2NlZHVyZSggJUNhbGxCYWNrJCwge30gKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdE1ldHJvLnRvYXN0LmNyZWF0ZSggJVRleHQkLCBudWxsLCBudWxsLCBudWxsLCBvcHRpb25zICk7XHJcbn1cclxuRW5kIEluc3RydWN0aW9uXHJcbiIsIm51bWJlciI6MiwicGFyZW50Ijp7InBhdGgiOiJpbmNsdWRlcy9sYW5ndWFnZS9tZC1yZWFkZXIuYW96aW5jIiwic291cmNlIjoiSW5zdHJ1Y3Rpb24gU3RhY2tFZGl0IE9wZW4sIFVSTCQsIE9uU3VjY2VzcyQ9XCJcIiwgT25FcnJvciQ9XCJcIlxyXG57XHJcblx0I2Vycm9yc1xyXG5cdGlmKCBNRFBhcnNlciA9PSB1bmRlZmluZWQgKVxyXG5cdHtcclxuXHRcdHRocm93IFwibWRfcGFyc2VyX2pzX25vdF9sb2FkZWRcIjtcclxuXHR9XHJcblxyXG5cdGlmKCAlVVJMJCA9PSB1bmRlZmluZWQgfHwgJVVSTCQgPT0gJycgKVxyXG5cdHtcclxuXHRcdHRocm93IFwibWRfbG9hZF91cmxfbWlzc2VkXCI7XHJcblx0fVxyXG5cclxuXHRNRFBhcnNlci5vcGVuKCAlVVJMJCwgJU9uU3VjY2VzcyQsICVPbkVycm9yJCApO1xyXG59XHJcbkVuZCBJbnN0cnVjdGlvblxyXG5cclxuXHJcbkluc3RydWN0aW9uIFN0YWNrRWRpdCBTaG93LCBDT0RFJCwgSFRNTF9JRCRcclxue1xyXG5cdCNlcnJvcnNcclxuXHRpZiggTURQYXJzZXIgPT0gdW5kZWZpbmVkIClcclxuXHR7XHJcblx0XHR0aHJvdyBcIm1kX3BhcnNlcl9qc19ub3RfbG9hZGVkXCI7XHJcblx0fVxyXG5cclxuXHRpZiggJUNPREUkID09IHVuZGVmaW5lZCB8fCAlQ09ERSQgPT0gJycgKVxyXG5cdHtcclxuXHRcdHRocm93IFwibm9fbWFya2Rvd25fY29kZV90b19wYXJzZVwiO1xyXG5cdH1cclxuXHJcblx0aWYoIFN0YWNrZWRpdCA9PSB1bmRlZmluZWQgKVxyXG5cdHtcclxuXHRcdHRocm93IFwic3RhY2tlZGl0X2xpYl9ub3RfbG9hZGVkXCI7XHJcblx0fVxyXG5cclxuXHRNRFBhcnNlci5zaG93KCAlQ09ERSQsICVIVE1MX0lEJCApO1xyXG59XHJcbkVuZCBJbnN0cnVjdGlvblxyXG5cclxuSW5zdHJ1Y3Rpb24gU3RhY2tFZGl0IEVkaXQsIENPREUkLCBPbkNoYW5nZSQgPSBcIlwiLCBPbkNsb3NlJCA9IFwiXCJcclxue1xyXG5cdCNlcnJvcnNcclxuXHRpZiggTURQYXJzZXIgPT0gdW5kZWZpbmVkIClcclxuXHR7XHJcblx0XHR0aHJvdyBcIm1kX3BhcnNlcl9qc19ub3RfbG9hZGVkXCI7XHJcblx0fVxyXG5cclxuXHRpZiggJUNPREUkID09IHVuZGVmaW5lZCB8fCAlQ09ERSQgPT0gJycgKVxyXG5cdHtcclxuXHRcdHRocm93IFwibm9fbWFya2Rvd25fY29kZV90b19wYXJzZVwiO1xyXG5cdH1cclxuXHJcblx0aWYoIFN0YWNrZWRpdCA9PSB1bmRlZmluZWQgKVxyXG5cdHtcclxuXHRcdHRocm93IFwic3RhY2tlZGl0X2xpYl9ub3RfbG9hZGVkXCI7XHJcblx0fVxyXG5cclxuXHRNRFBhcnNlci5lZGl0KCAlQ09ERSQsICVPbkNoYW5nZSQsICVPbkNsb3NlJCApO1xyXG59XHJcbkVuZCBJbnN0cnVjdGlvblxyXG4iLCJudW1iZXIiOjEsInBhcmVudCI6eyJwYXRoIjoiRDovUHJvZ3JhbXMvQU9aX1N0dWRpb19TRS9teV9hb3pfYXBwbGljYXRpb25zL0FPWiBEb2NzL0FPWiBEb2NzLmFveiIsInNvdXJjZSI6IkxvYWQgQXNzZXQgXCJodHRwczovL2Nkbi5tZXRyb3VpLm9yZy51YS92NC9jc3MvbWV0cm8tYWxsLm1pbi5jc3NcIiwgXCJtZXRyby1jc3NcIlxyXG5Mb2FkIEFzc2V0IFwiaHR0cHM6Ly9jZG4ubWV0cm91aS5vcmcudWEvdjQvanMvbWV0cm8ubWluLmpzXCIsIFwibWV0cm8tanNcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L3N0eWxlcy9wcmlzbS5jc3NcIiwgXCJwcmlzbS1jc3NcIlxyXG5Mb2FkIEFzc2V0IFwiaHR0cHM6Ly9zdGFja2VkaXQuaW8vc3R5bGUuY3NzXCIsIFwic3RhY2tlZGl0LWNzc1wiXHJcbkxvYWQgQXNzZXQgXCJodHRwczovL3VucGtnLmNvbS9zdGFja2VkaXQtanNAMS4wLjcvZG9jcy9saWIvc3RhY2tlZGl0Lm1pbi5qc1wiLCBcInN0YWNrZWRpdC1qc1wiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvanMvbGlicy9zdHJpbmctdXRpbHMuanNcIiwgXCJzdHJpbmdfdXRpbHNcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2xpYnMvbWQtcGFyc2VyLmpzXCIsIFwibWQtcGFyc2VyXCJcclxuTG9hZCBBc3NldCBcInd3dy9qcy9saWJzL3ByaXNtLmpzXCIsIFwicHJpc20tanNcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2xpYnMvbGFuZ3VhZ2VzL2Fvei5taW4uanNcIiwgXCJhb3pcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L3N0eWxlcy9mb250cy9mb250LmNzc1wiLCBcImZvbnQtY3NzXCJcclxuTG9hZCBBc3NldCBcInd3dy9zdHlsZXMvZm9udHMvZHlzbGV4aWEvc3R5bGVzaGVldC5jc3NcIiwgXCJkeXMtY3NzXCJcclxuTG9hZCBBc3NldCBcInd3dy9zdHlsZXMvZ2xvYmFsLmNzc1wiLCBcImdsb2JhbC1jc3NcIlxyXG5cclxuTG9hZCBBc3NldCBcInd3dy9odG1sL2luZGV4Lmh0bWxcIiwgXCJpbmRleFwiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvanMvaW5kZXguanNcIiwgXCJpbmRleC1qc1wiXHJcblxyXG5JbmNsdWRlIFwiaW5jbHVkZXMvbGFuZ3VhZ2UvbWQtcmVhZGVyLmFvemluY1wiXHJcbkluY2x1ZGUgXCJpbmNsdWRlcy9sYW5ndWFnZS90b2FzdC5hb3ppbmNcIlxyXG5JbmNsdWRlIFwiaW5jbHVkZXMvYXBwLmFvemluY1wiXHJcblxyXG5MT0NBTCA9IFRydWVcclxuR2xvYmFsIExPQ0FMXHJcbldhaXQgMiA6IE1BSU4gOiBXYWl0XHJcblxuY2xhcGZpblxuIiwibnVtYmVyIjowLCJwYXJlbnQiOm51bGwsIm9mZnNldExpbmVzIjowfSwib2Zmc2V0TGluZXMiOjE2fSwib2Zmc2V0TGluZXMiOjc5fSx7InBhdGgiOiJpbmNsdWRlcy9hcHAuYW96aW5jIiwic291cmNlIjoiTEFORyQgPSBcImVuXCIgOiBDVVJSRU5UX1BBR0UkID0gXCJtb3JlX3RyaWNrcy9pbnRyb2R1Y3Rpb24udHh0XCIgOiBDVVJSRU5UX0NPREUkID0gXCJcIlxyXG5ST09UX1VSTCQgPSBcImh0dHBzOi8vZG9jLmFvei5zdHVkaW9cIiA6IENVUl9JRCQgPSBcIlwiIDogQ1VSX1RZUEUkID0gXCJcIlxyXG5cclxuRGltIEhJU1RPX1BBR0UkKCAxMDAwICkgOiBDVVJfSElTVE8gPSAxXHJcbkdsb2JhbCBDVVJfSUQkLCBDVVJfVFlQRSQsIFJPT1RfVVJMJCwgTEFORyQsIENVUlJFTlRfUEFHRSQsIEhJU1RPX1BBR0UkKCksIENVUl9ISVNUTywgQ1VSUkVOVF9DT0RFJFxyXG5cclxuLy8gUG9pbnQgZGUgZOlwYXJ0IGR1IHByb2dyYW1tZVxyXG5Qcm9jZWR1cmUgTUFJTlxyXG5cdElmIExPQ0FMID0gVHJ1ZSBUaGVuIFJPT1RfVVJMJCA9IFwiaHR0cDovL2xvY2FsaG9zdC9hb3pkb2MvXCJcclxuXHRTaG93IEhUTUwgXCJpbmRleFwiXHJcblx0SlMgRXhlY3V0ZSBcImluaXRQYW5lbHMoKTtcIlxyXG5cdFJFTE9BRF9MQU5HXHJcbkVuZCBQcm9jZWR1cmVcclxuXHJcbi8vIFJlY2hhcmdlbWVudCBkZXMgcnVicmlxdWVzIGV0IGRlIGxhIHBhZ2UgYWN0dWVsbGUgYXZlYyBsYSBsYW5ndWUgZW4gY291cnNcclxuUHJvY2VkdXJlIFJFTE9BRF9MQU5HXHJcblx0U3RhY2tFZGl0IE9wZW4gVVJMJCA9IFJPT1RfVVJMJCArIFwiL3BocC9pbmRleC5waHA/cGFnZT11c2VyX2d1aWRlL3RhYmxlX29mX2NvbnRlbnRzL3RvcGljcy50eHRcIiwgT25TdWNjZXNzJD1cIl9PTl9UT1BJQ1NfTE9BREVEXCJcclxuXHRQQUdFX0xPQURbIFwiXCIsIENVUlJFTlRfUEFHRSQsIEZhbHNlIF1cclxuRW5kIFByb2NlZHVyZVxyXG5cclxuUHJvY2VkdXJlIEdPX0hPTUVcclxuXHRDVVJSRU5UX1BBR0UkID0gXCJtb3JlX3RyaWNrcy9pbnRyb2R1Y3Rpb24udHh0XCJcclxuXHRQQUdFX0xPQURbIFwiXCIsIENVUlJFTlRfUEFHRSQsIFRydWUgXVxyXG5FbmQgUHJvY2VkdXJlXHJcblxyXG4vLyBDaGFyZ2VtZW50IGQndW5lIHBhZ2VcclxuUHJvY2VkdXJlIFBBR0VfTE9BRFsgSUQkLCBVUkwkLCBJU19ORVcgXVxyXG5cdENVUlJFTlRfUEFHRSQgPSBVUkwkXHJcblx0SWYgSVNfTkVXID0gVHJ1ZVxyXG5cdFx0Q1VSX0hJU1RPID0gQ1VSX0hJU1RPICsgMVxyXG5cdFx0Rm9yIFIgPSBDVVJfSElTVE8gVG8gMTAwMCA6IEhJU1RPX1BBR0UkKCBSICkgPSBcIlwiIDogTmV4dCBSXHJcblx0RW5kIElmXHJcblxyXG5cdEhJU1RPX1BBR0UkKCBDVVJfSElTVE8gKSA9IFVSTCRcclxuXHRJZiBJRCQgPD4gXCJcIlxyXG5cdFx0SWYgQ1VSX0lEJCA8PiBcIlwiIEFuZCBDVVJfSUQkIDw+IElEJFxyXG5cdFx0XHRIVE1MIEVsZW1lbnQgQ1VSX0lEJCwgQ2xhc3NOYW1lJCA9IENVUl9UWVBFJFxyXG5cdFx0RW5kIElmXHJcblx0XHRDVVJfSUQkID0gSUQkIDogQ1VSX1RZUEUkID0gSFRNTCBFbGVtZW50IEF0dHJpYnV0ZSQoIElEJCwgXCJjbGFzc1wiIClcclxuXHRcdEhUTUwgRWxlbWVudCBDVVJfSUQkLCBDbGFzc05hbWUkID0gQ1VSX1RZUEUkICsgXCIgc2VsZWN0LXRvcGljXCJcclxuXHRFbmQgSWZcclxuXHRTdGFja0VkaXQgT3BlbiBVUkwkID0gUk9PVF9VUkwkICsgXCIvcGhwL2luZGV4LnBocD9wYWdlPVwiICsgVVJMJCwgT25TdWNjZXNzJD1cIl9PTl9QQUdFX0xPQURFRFwiXHJcbkVuZCBQcm9jZWR1cmVcclxuXHJcblByb2NlZHVyZSBQQUdFX0VESVRcclxuXHRTdGFja0VkaXQgRWRpdCBDT0RFJCA9IENVUlJFTlRfQ09ERSQsIE9uQ2xvc2UkID0gXCJfQ0xPU0VfRURJVFwiXHJcbkVuZCBQcm9jZWR1cmVcclxuXHJcblByb2NlZHVyZSBfQ0xPU0VfRURJVFsgQ09ERSQgXVxyXG5cdF9PTl9QQUdFX0xPQURFRFsgQ09ERSQgXVxyXG5FbmQgUHJvY1xyXG5cclxuLy8gTGVzIHJ1YnJpcXVlcyBzb250IGNoYXJn6WVzID8gQWxvcnMgb24gbGVzIGFmZmljaGVcclxuUHJvY2VkdXJlIF9PTl9UT1BJQ1NfTE9BREVEWyBDT0RFJCBdXHJcblx0Q09ERSQgPSBSZXBsYWNlJChDT0RFJCwgXCJwcm9jZWR1cmU6UEFHRV9MT0FEKFwiLCBcImphdmFzY3JpcHQ6YXBwbGljYXRpb24uYW96LnJ1blByb2NlZHVyZSggJ1BBR0VfTE9BRCcsXCIgKVxyXG5cdENPREUkID0gUmVwbGFjZSQoQ09ERSQsIFwibWQvZG9jdW1lbnRhdGlvbi9cIiwgXCJcIiApXHJcblx0SFRNTCBFbGVtZW50IFwidG9waWNzXCIsIENvbnRlbnQkPUNPREUkXHJcbkVuZCBQcm9jZWR1cmVcclxuXHJcbi8vIExhIHBhZ2UgZXN0IGNoYXJn6WUgLiBBbG9ycyBvbiBsJ2FmZmljaGVcclxuUHJvY2VkdXJlIF9PTl9QQUdFX0xPQURFRFsgQ09ERSQgXVxyXG5cdENVUlJFTlRfQ09ERSQgPSBDT0RFJFxyXG5cdFN0YWNrRWRpdCBTaG93IENPREUkLCBcInBhZ2VcIlxyXG5FbmQgUHJvY2VkdXJlXHJcblxyXG4vLyBQYWdlIHBy6WPpZGVudGVcclxuUHJvY2VkdXJlIFBSRVZJT1VTX1BBR0VcclxuXHRJZiBDVVJfSElTVE8gPiAxXHJcblx0XHRDVVJfSElTVE8gPSBDVVJfSElTVE8gLSAxXHJcblx0XHRJZiBNSUQkKCBISVNUT19QQUdFJCggQ1VSX0hJU1RPICksIDAsIDcgKSA9IFwiU0VBUkNIOlwiXHJcblx0XHRcdC8vQ1VSX0hJU1RPID0gQ1VSX0hJU1RPIC0gMVxyXG5cdFx0XHRLRVlfU0VBUkNIWyBcIkVudGVyXCIsIE1JRCQoIEhJU1RPX1BBR0UkKCBDVVJfSElTVE8gKSwgNywgTEVOKCBISVNUT19QQUdFJCggQ1VSX0hJU1RPICkgKSApLCBGYWxzZSBdXHJcblx0XHRFbHNlXHJcblx0XHRcdFBBR0VfTE9BRFsgXCJcIiwgSElTVE9fUEFHRSQoIENVUl9ISVNUTyApLCBGYWxzZSBdXHJcblx0XHRFbmQgSWZcclxuXHRFbmQgSWZcclxuRW5kIFByb2NlZHVyZVxyXG5cclxuLy8gUGFnZSBzdWl2YW50ZVxyXG5Qcm9jZWR1cmUgTkVYVF9QQUdFXHJcblx0SWYgQ1VSX0hJU1RPIDwgMTAwMCBBbmQgSElTVE9fUEFHRSQoIENVUl9ISVNUTyArIDEgKSA8PiBcIlwiXHJcblx0XHRDVVJfSElTVE8gPSBDVVJfSElTVE8gKyAxXHJcblx0XHRJZiBNSUQkKCBISVNUT19QQUdFJCggQ1VSX0hJU1RPICksIDAsIDcgKSA9IFwiU0VBUkNIOlwiXHJcblx0XHRcdC8vQ1VSX0hJU1RPID0gQ1VSX0hJU1RPIC0gMVxyXG5cdFx0XHRLRVlfU0VBUkNIWyBcIkVudGVyXCIsIE1JRCQoIEhJU1RPX1BBR0UkKCBDVVJfSElTVE8gKSwgNywgTEVOKCBISVNUT19QQUdFJCggQ1VSX0hJU1RPICkgKSApLCBGYWxzZSBdXHJcblx0XHRFbHNlXHJcblx0XHRcdFBBR0VfTE9BRFsgXCJcIiwgSElTVE9fUEFHRSQoIENVUl9ISVNUTyApLCBGYWxzZSBdXHJcblx0XHRFbmQgSWZcclxuXHRFbmQgSWZcclxuRW5kIFByb2NlZHVyZVxyXG5cclxuUHJvY2VkdXJlIEtFWV9TRUFSQ0hbIENLRVkkLCBWQUxVRSQsIElTTkVXIF1cclxuXHRJZiBDS0VZJCA9IFwiRW50ZXJcIlxyXG5cdFx0SWYgSVNORVdcclxuXHRcdFx0SWYgQ1VSX0hJU1RPIDwgMTAwMFxyXG5cdFx0XHRcdENVUl9ISVNUTyA9IENVUl9ISVNUTyArIDFcclxuXHRcdFx0XHRGb3IgUiA9IENVUl9ISVNUTyBUbyAxMDAwIDogSElTVE9fUEFHRSQoIFIgKSA9IFwiXCIgOiBOZXh0IFJcclxuXHRcdFx0RW5kIElmXHJcblx0XHRFbmQgSWZcclxuXHRcdEhJU1RPX1BBR0UkKCBDVVJfSElTVE8gKSA9IFwiU0VBUkNIOlwiICsgVkFMVUUkXHJcblx0XHRKUyBFeGVjdXRlIFwic2VhcmNoKCAnXCIgKyBWQUxVRSQgKyBcIicgKTtcIlxyXG5cdEVuZCBJZlxyXG5FbmQgUHJvY2VkdXJlXHJcbiIsIm51bWJlciI6MywicGFyZW50Ijp7InBhdGgiOiJpbmNsdWRlcy9sYW5ndWFnZS90b2FzdC5hb3ppbmMiLCJzb3VyY2UiOiJJbnN0cnVjdGlvbiBUb2FzdCwgVGV4dCQsIFR5cGUkPVwicHJpbWFyeVwiLCBTaG93VG9wID0gRmFsc2UsIER1cmF0aW9uID0gMzAwMCwgQ2FsbEJhY2skPVwiXCJcclxue1xyXG5cdCNlcnJvcnNcclxuXHRpZiggTWV0cm8gPT0gdW5kZWZpbmVkIClcclxuXHR7XHJcblx0XHR0aHJvdyBcIm1ldHJvX3VpX2xpYl9ub3RfbG9hZGVkXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgb3B0aW9ucyA9XHJcblx0e1xyXG5cdCAgICBjYWxsYmFjazogTWV0cm8ubm9vcCxcclxuXHQgICAgdGltZW91dDogJUR1cmF0aW9uLFxyXG5cdCAgICBkaXN0YW5jZTogMjAsXHJcblx0ICAgIHNob3dUb3A6ICVTaG93VG9wLFxyXG5cdCAgICBjbHNUb2FzdDogXCJcIlxyXG5cdH1cclxuXHJcblx0aWYoICVDYWxsQmFjayQgIT0gJycgKVxyXG5cdHtcclxuIFx0XHRvcHRpb25zLmNhbGxiYWNrID0gZnVuY3Rpb24oKVxyXG5cdFx0e1xyXG5cdFx0XHRhcHBsaWNhdGlvbi5hb3oucnVuUHJvY2VkdXJlKCAlQ2FsbEJhY2skLCB7fSApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0TWV0cm8udG9hc3QuY3JlYXRlKCAlVGV4dCQsIG51bGwsIG51bGwsIG51bGwsIG9wdGlvbnMgKTtcclxufVxyXG5FbmQgSW5zdHJ1Y3Rpb25cclxuIiwibnVtYmVyIjoyLCJwYXJlbnQiOnsicGF0aCI6ImluY2x1ZGVzL2xhbmd1YWdlL21kLXJlYWRlci5hb3ppbmMiLCJzb3VyY2UiOiJJbnN0cnVjdGlvbiBTdGFja0VkaXQgT3BlbiwgVVJMJCwgT25TdWNjZXNzJD1cIlwiLCBPbkVycm9yJD1cIlwiXHJcbntcclxuXHQjZXJyb3JzXHJcblx0aWYoIE1EUGFyc2VyID09IHVuZGVmaW5lZCApXHJcblx0e1xyXG5cdFx0dGhyb3cgXCJtZF9wYXJzZXJfanNfbm90X2xvYWRlZFwiO1xyXG5cdH1cclxuXHJcblx0aWYoICVVUkwkID09IHVuZGVmaW5lZCB8fCAlVVJMJCA9PSAnJyApXHJcblx0e1xyXG5cdFx0dGhyb3cgXCJtZF9sb2FkX3VybF9taXNzZWRcIjtcclxuXHR9XHJcblxyXG5cdE1EUGFyc2VyLm9wZW4oICVVUkwkLCAlT25TdWNjZXNzJCwgJU9uRXJyb3IkICk7XHJcbn1cclxuRW5kIEluc3RydWN0aW9uXHJcblxyXG5cclxuSW5zdHJ1Y3Rpb24gU3RhY2tFZGl0IFNob3csIENPREUkLCBIVE1MX0lEJFxyXG57XHJcblx0I2Vycm9yc1xyXG5cdGlmKCBNRFBhcnNlciA9PSB1bmRlZmluZWQgKVxyXG5cdHtcclxuXHRcdHRocm93IFwibWRfcGFyc2VyX2pzX25vdF9sb2FkZWRcIjtcclxuXHR9XHJcblxyXG5cdGlmKCAlQ09ERSQgPT0gdW5kZWZpbmVkIHx8ICVDT0RFJCA9PSAnJyApXHJcblx0e1xyXG5cdFx0dGhyb3cgXCJub19tYXJrZG93bl9jb2RlX3RvX3BhcnNlXCI7XHJcblx0fVxyXG5cclxuXHRpZiggU3RhY2tlZGl0ID09IHVuZGVmaW5lZCApXHJcblx0e1xyXG5cdFx0dGhyb3cgXCJzdGFja2VkaXRfbGliX25vdF9sb2FkZWRcIjtcclxuXHR9XHJcblxyXG5cdE1EUGFyc2VyLnNob3coICVDT0RFJCwgJUhUTUxfSUQkICk7XHJcbn1cclxuRW5kIEluc3RydWN0aW9uXHJcblxyXG5JbnN0cnVjdGlvbiBTdGFja0VkaXQgRWRpdCwgQ09ERSQsIE9uQ2hhbmdlJCA9IFwiXCIsIE9uQ2xvc2UkID0gXCJcIlxyXG57XHJcblx0I2Vycm9yc1xyXG5cdGlmKCBNRFBhcnNlciA9PSB1bmRlZmluZWQgKVxyXG5cdHtcclxuXHRcdHRocm93IFwibWRfcGFyc2VyX2pzX25vdF9sb2FkZWRcIjtcclxuXHR9XHJcblxyXG5cdGlmKCAlQ09ERSQgPT0gdW5kZWZpbmVkIHx8ICVDT0RFJCA9PSAnJyApXHJcblx0e1xyXG5cdFx0dGhyb3cgXCJub19tYXJrZG93bl9jb2RlX3RvX3BhcnNlXCI7XHJcblx0fVxyXG5cclxuXHRpZiggU3RhY2tlZGl0ID09IHVuZGVmaW5lZCApXHJcblx0e1xyXG5cdFx0dGhyb3cgXCJzdGFja2VkaXRfbGliX25vdF9sb2FkZWRcIjtcclxuXHR9XHJcblxyXG5cdE1EUGFyc2VyLmVkaXQoICVDT0RFJCwgJU9uQ2hhbmdlJCwgJU9uQ2xvc2UkICk7XHJcbn1cclxuRW5kIEluc3RydWN0aW9uXHJcbiIsIm51bWJlciI6MSwicGFyZW50Ijp7InBhdGgiOiJEOi9Qcm9ncmFtcy9BT1pfU3R1ZGlvX1NFL215X2Fvel9hcHBsaWNhdGlvbnMvQU9aIERvY3MvQU9aIERvY3MuYW96Iiwic291cmNlIjoiTG9hZCBBc3NldCBcImh0dHBzOi8vY2RuLm1ldHJvdWkub3JnLnVhL3Y0L2Nzcy9tZXRyby1hbGwubWluLmNzc1wiLCBcIm1ldHJvLWNzc1wiXHJcbkxvYWQgQXNzZXQgXCJodHRwczovL2Nkbi5tZXRyb3VpLm9yZy51YS92NC9qcy9tZXRyby5taW4uanNcIiwgXCJtZXRyby1qc1wiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL3ByaXNtLmNzc1wiLCBcInByaXNtLWNzc1wiXHJcbkxvYWQgQXNzZXQgXCJodHRwczovL3N0YWNrZWRpdC5pby9zdHlsZS5jc3NcIiwgXCJzdGFja2VkaXQtY3NzXCJcclxuTG9hZCBBc3NldCBcImh0dHBzOi8vdW5wa2cuY29tL3N0YWNrZWRpdC1qc0AxLjAuNy9kb2NzL2xpYi9zdGFja2VkaXQubWluLmpzXCIsIFwic3RhY2tlZGl0LWpzXCJcclxuTG9hZCBBc3NldCBcInd3dy9qcy9saWJzL3N0cmluZy11dGlscy5qc1wiLCBcInN0cmluZ191dGlsc1wiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvanMvbGlicy9tZC1wYXJzZXIuanNcIiwgXCJtZC1wYXJzZXJcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2xpYnMvcHJpc20uanNcIiwgXCJwcmlzbS1qc1wiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvanMvbGlicy9sYW5ndWFnZXMvYW96Lm1pbi5qc1wiLCBcImFvelwiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL2ZvbnRzL2ZvbnQuY3NzXCIsIFwiZm9udC1jc3NcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L3N0eWxlcy9mb250cy9keXNsZXhpYS9zdHlsZXNoZWV0LmNzc1wiLCBcImR5cy1jc3NcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L3N0eWxlcy9nbG9iYWwuY3NzXCIsIFwiZ2xvYmFsLWNzc1wiXHJcblxyXG5Mb2FkIEFzc2V0IFwid3d3L2h0bWwvaW5kZXguaHRtbFwiLCBcImluZGV4XCJcclxuTG9hZCBBc3NldCBcInd3dy9qcy9pbmRleC5qc1wiLCBcImluZGV4LWpzXCJcclxuXHJcbkluY2x1ZGUgXCJpbmNsdWRlcy9sYW5ndWFnZS9tZC1yZWFkZXIuYW96aW5jXCJcclxuSW5jbHVkZSBcImluY2x1ZGVzL2xhbmd1YWdlL3RvYXN0LmFvemluY1wiXHJcbkluY2x1ZGUgXCJpbmNsdWRlcy9hcHAuYW96aW5jXCJcclxuXHJcbkxPQ0FMID0gVHJ1ZVxyXG5HbG9iYWwgTE9DQUxcclxuV2FpdCAyIDogTUFJTiA6IFdhaXRcclxuXG5jbGFwZmluXG4iLCJudW1iZXIiOjAsInBhcmVudCI6bnVsbCwib2Zmc2V0TGluZXMiOjB9LCJvZmZzZXRMaW5lcyI6MTZ9LCJvZmZzZXRMaW5lcyI6Nzl9LCJvZmZzZXRMaW5lcyI6MTA5fV0=')),
		localTags: JSON.parse(atob('e30=')),
		globalTags: JSON.parse(atob('e30=')),
		developerMode: false,
		gotoDirectMode: false,
		useSounds: false,
		loadFilesAfter: JSON.parse(atob('W10='))
	};
	this.aoz=new AOZ(canvasId,options, 'tzkuf0lt74hzhh2zkcp');
	this.vars = ( typeof args == 'undefined' ? {} : args );
	this.procParam$='';
	this.procParam=0;
	this.objects={};
	// Compiled program begins here
	// ----------------------------
	this.vars.LANG$="";
	this.vars.CURRENT_PAGE$="";
	this.vars.CURRENT_CODE$="";
	this.vars.ROOT_URL$="";
	this.vars.CUR_ID$="";
	this.vars.CUR_TYPE$="";
	this.vars.HISTO_PAGE$_array=new AArray(this.aoz,"",0);
	this.vars.CUR_HISTO=0;
	this.vars.LOCAL=0;
	this.infoGlobals=
	{	
		lang$:this.aoz.varPtr('{"variable":{"name":"LANG$","token":"lang$","tokenCode":"LANG$","codeInit":"","nameReal":"LANG$","nameRealLower":"lang$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":9,"classDefinition":null},"parameters":""}'),
		current_page$:this.aoz.varPtr('{"variable":{"name":"CURRENT_PAGE$","token":"current_page$","tokenCode":"CURRENT_PAGE$","codeInit":"","nameReal":"CURRENT_PAGE$","nameRealLower":"current_page$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":10,"classDefinition":null},"parameters":""}'),
		current_code$:this.aoz.varPtr('{"variable":{"name":"CURRENT_CODE$","token":"current_code$","tokenCode":"CURRENT_CODE$","codeInit":"","nameReal":"CURRENT_CODE$","nameRealLower":"current_code$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":11,"classDefinition":null},"parameters":""}'),
		root_url$:this.aoz.varPtr('{"variable":{"name":"ROOT_URL$","token":"root_url$","tokenCode":"ROOT_URL$","codeInit":"","nameReal":"ROOT_URL$","nameRealLower":"root_url$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":12,"classDefinition":null},"parameters":""}'),
		cur_id$:this.aoz.varPtr('{"variable":{"name":"CUR_ID$","token":"cur_id$","tokenCode":"CUR_ID$","codeInit":"","nameReal":"CUR_ID$","nameRealLower":"cur_id$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":13,"classDefinition":null},"parameters":""}'),
		cur_type$:this.aoz.varPtr('{"variable":{"name":"CUR_TYPE$","token":"cur_type$","tokenCode":"CUR_TYPE$","codeInit":"","nameReal":"CUR_TYPE$","nameRealLower":"cur_type$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":14,"classDefinition":null},"parameters":""}'),
		histo_page$_array:this.aoz.varPtr('{"variable":{"name":"HISTO_PAGE$","token":"histo_page$_array","tokenCode":"HISTO_PAGE$_array","codeInit":"","nameReal":"HISTO_PAGE$","nameRealLower":"histo_page$","type":"string","numberType":"2","isArray":true,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":1,"defined":true,"nonDimensionned":false,"index":15,"code":"vars.HISTO_PAGE$_array","classDefinition":null},"code":"vars.HISTO_PAGE$_array","parameters":""}'),
		cur_histo:this.aoz.varPtr('{"variable":{"name":"CUR_HISTO","token":"cur_histo","tokenCode":"CUR_HISTO","codeInit":"","nameReal":"CUR_HISTO","nameRealLower":"cur_histo","type":"integer","numberType":"0","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":16,"classDefinition":null},"parameters":""}'),
		local:this.aoz.varPtr('{"variable":{"name":"LOCAL","token":"local","tokenCode":"LOCAL","codeInit":"","nameReal":"LOCAL","nameRealLower":"local","type":"integer","numberType":"0","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":17,"classDefinition":null},"parameters":""}'),
	};
	this.blocks=[];
	this.blocks[0]=function(aoz,vars)
	{
		// From source: D:/Programs/AOZ_Studio_SE/my_aoz_applications/AOZ Docs/AOZ Docs.aoz
		aoz.sourcePos="0:0:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["https://cdn.metroui.org.ua/v4/css/metro-all.min.css","metro-css",false]};
	};
	this.blocks[1]=function(aoz,vars)
	{
		// Load Asset "https://cdn.metroui.org.ua/v4/js/metro.min.js", "metro-js"
		aoz.sourcePos="0:1:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["https://cdn.metroui.org.ua/v4/js/metro.min.js","metro-js",false]};
	};
	this.blocks[2]=function(aoz,vars)
	{
		// Load Asset "www/styles/prism.css", "prism-css"
		aoz.sourcePos="0:2:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/styles/prism.css","prism-css",false]};
	};
	this.blocks[3]=function(aoz,vars)
	{
		// Load Asset "https://stackedit.io/style.css", "stackedit-css"
		aoz.sourcePos="0:3:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["https://stackedit.io/style.css","stackedit-css",false]};
	};
	this.blocks[4]=function(aoz,vars)
	{
		// Load Asset "https://unpkg.com/stackedit-js@1.0.7/docs/lib/stackedit.min.js", "stackedit-js"
		aoz.sourcePos="0:4:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["https://unpkg.com/stackedit-js@1.0.7/docs/lib/stackedit.min.js","stackedit-js",false]};
	};
	this.blocks[5]=function(aoz,vars)
	{
		// Load Asset "www/js/libs/string-utils.js", "string_utils"
		aoz.sourcePos="0:5:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/js/libs/string-utils.js","string_utils",false]};
	};
	this.blocks[6]=function(aoz,vars)
	{
		// Load Asset "www/js/libs/md-parser.js", "md-parser"
		aoz.sourcePos="0:6:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/js/libs/md-parser.js","md-parser",false]};
	};
	this.blocks[7]=function(aoz,vars)
	{
		// Load Asset "www/js/libs/prism.js", "prism-js"
		aoz.sourcePos="0:7:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/js/libs/prism.js","prism-js",false]};
	};
	this.blocks[8]=function(aoz,vars)
	{
		// Load Asset "www/js/libs/languages/aoz.min.js", "aoz"
		aoz.sourcePos="0:8:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/js/libs/languages/aoz.min.js","aoz",false]};
	};
	this.blocks[9]=function(aoz,vars)
	{
		// Load Asset "www/styles/fonts/font.css", "font-css"
		aoz.sourcePos="0:9:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/styles/fonts/font.css","font-css",false]};
	};
	this.blocks[10]=function(aoz,vars)
	{
		// Load Asset "www/styles/fonts/dyslexia/stylesheet.css", "dys-css"
		aoz.sourcePos="0:10:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/styles/fonts/dyslexia/stylesheet.css","dys-css",false]};
	};
	this.blocks[11]=function(aoz,vars)
	{
		// Load Asset "www/styles/global.css", "global-css"
		aoz.sourcePos="0:11:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/styles/global.css","global-css",false]};
	};
	this.blocks[12]=function(aoz,vars)
	{
		// Load Asset "www/html/index.html", "index"
		aoz.sourcePos="0:13:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/html/index.html","index",false]};
	};
	this.blocks[13]=function(aoz,vars)
	{
		// Load Asset "www/js/index.js", "index-js"
		aoz.sourcePos="0:14:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/js/index.js","index-js",false]};
	};
	this.blocks[14]=function(aoz,vars)
	{
		aoz.sourcePos="0:16:0";
		aoz.sourcePos="0:17:0";
		
		// From source: includes/app.aozinc
		aoz.sourcePos="3:0:0";
		vars.LANG$="en";
		aoz.sourcePos="3:0:15";
		vars.CURRENT_PAGE$="more_tricks/introduction.txt";
		aoz.sourcePos="3:0:64";
		vars.CURRENT_CODE$="";
		// ROOT_URL$ = "https://doc.aoz.studio" : CUR_ID$ = "" : CUR_TYPE$ = ""
		aoz.sourcePos="3:1:0";
		vars.ROOT_URL$="https://doc.aoz.studio";
		aoz.sourcePos="3:1:39";
		vars.CUR_ID$="";
		aoz.sourcePos="3:1:54";
		vars.CUR_TYPE$="";
		// Dim HISTO_PAGE$( 1000 ) : CUR_HISTO = 1
		vars.HISTO_PAGE$_array.dim([1000],0);
		aoz.sourcePos="3:3:26";
		vars.CUR_HISTO=1;
		aoz.sourcePos="0:18:0";
		
		// From source: D:/Programs/AOZ_Studio_SE/my_aoz_applications/AOZ Docs/AOZ Docs.aoz
		aoz.sourcePos="0:20:0";
		vars.LOCAL=this.aoz.platformTrue;
		// Wait 2 : MAIN : Wait
		aoz.sourcePos="0:22:0";
		return{type:12,waitThis:aoz,callFunction:"wait",waitFunction:"wait_wait",args:[2]};
	};
	this.blocks[15]=function(aoz,vars)
	{
		aoz.sourcePos="0:22:9";
		return{type:4,procedure:"main",args:{}};
	};
	this.blocks[16]=function(aoz,vars)
	{
		aoz.sourcePos="0:22:16";
		return{type:12,waitThis:aoz,callFunction:"wait",waitFunction:"wait_wait",args:[undefined]};
	};
	this.blocks[17]=function(aoz,vars)
	{
		return{type:0}
	};
	this.p_main=function(aoz,parent,args)
	{
		this.aoz=aoz;
		this.root=parent.root;
		this.className="procedure";
		this.parent=parent;
		this.vars={};
		this.parent.procParam=0;
		this.parent.procParam$="";
		for ( v in args )
		{
			if ( typeof args[ v ] != "undefined" ) 
				this.vars[ v ] = args[v];
		}
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// From source: includes/app.aozinc
			aoz.sourcePos="3:8:4";
			if(!((this.root.vars.LOCAL)==(this.aoz.platformTrue)))
				return{type:1,label:2};
		};
		this.blocks[1]=function(aoz,vars)
		{
			aoz.sourcePos="3:8:25";
			this.root.vars.ROOT_URL$="http://localhost/aozdoc/";
		};
		this.blocks[2]=function(aoz,vars)
		{
			// Show HTML "index"
			aoz.sourcePos="3:9:4";
			Show_HTML( "index", false, "" );
			// JS Execute "initPanels();"
			aoz.sourcePos="3:10:4";
			JS_Execute( "initPanels();" );
			// RELOAD_LANG
			aoz.sourcePos="3:11:4";
			return{type:4,procedure:"reload_lang",args:{}};
		};
		this.blocks[3]=function(aoz,vars)
		{
			// End Procedure
			return{type:0};
		};
	};
	this.p_reload_lang=function(aoz,parent,args)
	{
		this.aoz=aoz;
		this.root=parent.root;
		this.className="procedure";
		this.parent=parent;
		this.vars={};
		this.parent.procParam=0;
		this.parent.procParam$="";
		for ( v in args )
		{
			if ( typeof args[ v ] != "undefined" ) 
				this.vars[ v ] = args[v];
		}
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// StackEdit Open URL$ = ROOT_URL$ + "/php/index.php?page=user_guide/table_of_contents/topics.txt", OnSuccess$="_ON_TOPICS_LOADED"
			aoz.sourcePos="3:16:4";
			if( MDParser == undefined )
			{
				throw "md_parser_js_not_loaded";
			}
			if( this.root.vars.ROOT_URL$+"/php/index.php?page=user_guide/table_of_contents/topics.txt" == undefined || this.root.vars.ROOT_URL$+"/php/index.php?page=user_guide/table_of_contents/topics.txt" == '' )
			{
				throw "md_load_url_missed";
			}
			MDParser.open( this.root.vars.ROOT_URL$+"/php/index.php?page=user_guide/table_of_contents/topics.txt", "_ON_TOPICS_LOADED", "" );
			// PAGE_LOAD[ "", CURRENT_PAGE$, False ]
			aoz.sourcePos="3:17:4";
			return{type:4,procedure:"page_load",args:{ID$:"",URL$:this.root.vars.CURRENT_PAGE$,IS_NEW:false}};
		};
		this.blocks[1]=function(aoz,vars)
		{
			// End Procedure
			return{type:0};
		};
	};
	this.p_go_home=function(aoz,parent,args)
	{
		this.aoz=aoz;
		this.root=parent.root;
		this.className="procedure";
		this.parent=parent;
		this.vars={};
		this.parent.procParam=0;
		this.parent.procParam$="";
		for ( v in args )
		{
			if ( typeof args[ v ] != "undefined" ) 
				this.vars[ v ] = args[v];
		}
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// CURRENT_PAGE$ = "more_tricks/introduction.txt"
			aoz.sourcePos="3:21:4";
			this.root.vars.CURRENT_PAGE$="more_tricks/introduction.txt";
			// PAGE_LOAD[ "", CURRENT_PAGE$, True ]
			aoz.sourcePos="0:17:25";
			return{type:4,procedure:"page_load",args:{ID$:"",URL$:this.root.vars.CURRENT_PAGE$,IS_NEW:this.aoz.platformTrue}};
		};
		this.blocks[1]=function(aoz,vars)
		{
			// End Procedure
			return{type:0};
		};
	};
	this.p_page_load=function(aoz,parent,args)
	{
		this.aoz=aoz;
		this.root=parent.root;
		this.className="procedure";
		this.parent=parent;
		this.vars={};
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.vars.ID$="";
		this.vars.URL$="";
		this.vars.IS_NEW=0;
		for ( v in args )
		{
			if ( typeof args[ v ] != "undefined" ) 
				this.vars[ v ] = args[v];
		}
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// CURRENT_PAGE$ = URL$
			aoz.sourcePos="3:27:4";
			this.root.vars.CURRENT_PAGE$=vars.URL$;
			// If IS_NEW = True
			aoz.sourcePos="3:28:4";
			if(!((vars.IS_NEW)==(this.aoz.platformTrue)))
				return{type:1,label:4};
		};
		this.blocks[1]=function(aoz,vars)
		{
			// CUR_HISTO = CUR_HISTO + 1
			aoz.sourcePos="3:29:8";
			this.root.vars.CUR_HISTO=aoz.fp2Int(this.root.vars.CUR_HISTO+1);
			// For R = CUR_HISTO To 1000 : HISTO_PAGE$( R ) = "" : Next R
			aoz.sourcePos="3:30:8";
			vars.R=aoz.fp2Int(this.root.vars.CUR_HISTO);
		};
		this.blocks[2]=function(aoz,vars)
		{
			aoz.sourcePos="3:30:36";
			this.root.vars.HISTO_PAGE$_array.setValue([vars.R],"")
			aoz.sourcePos="3:30:60";
			vars.R+=1;
			if(vars.R<=1000)
				return{type:1,label:2};
		};
		this.blocks[3]=function(aoz,vars)
		{
			// End If
			aoz.sourcePos="3:31:4";
		};
		this.blocks[4]=function(aoz,vars)
		{
			// HISTO_PAGE$( CUR_HISTO ) = URL$
			aoz.sourcePos="3:33:4";
			this.root.vars.HISTO_PAGE$_array.setValue([this.root.vars.CUR_HISTO],vars.URL$)
			// If ID$ <> ""
			aoz.sourcePos="3:34:4";
			if(!((vars.ID$)!=("")))
				return{type:1,label:8};
		};
		this.blocks[5]=function(aoz,vars)
		{
			// If CUR_ID$ <> "" And CUR_ID$ <> ID$
			aoz.sourcePos="3:35:8";
			if(!(((this.root.vars.CUR_ID$)!=(""))&&((this.root.vars.CUR_ID$)!=(vars.ID$))))
				return{type:1,label:7};
		};
		this.blocks[6]=function(aoz,vars)
		{
			// HTML Element CUR_ID$, ClassName$ = CUR_TYPE$
			aoz.sourcePos="3:36:12";
			HTML_Element(
			{
				index: this.root.vars.CUR_ID$,
				className: this.root.vars.CUR_TYPE$,
				content: "",
				style: "",
				focus: this.aoz.platformTrue,
				visible: this.aoz.platformTrue,
				enable: this.aoz.platformTrue,
				value: "",
				source: "",
				checked: -255,
				onFocus: "",
				onBlur: "",
				onClick: "",
				onDoubleClick: "",
				onMouseDown: "",
				onMouseUp: "",
				onMouseMove: "",
				onMouseEnter: "",
				onMouseOver: "",
				onMouseOut: "",
				onKeyPress: "",
				onKeyDown: "",
				onKeyUp: "",
				position: "",
				left: -100101,
				right: -100101,
				top: -100101,
				bottom: -100101,
				zIndex: -1,
				width: -1,
				height: -1,
				startX: -100101,
				startY: -100101,
				endX: -100101,
				endY: -100101,
				duration: 1000
			} );
			// End If
			aoz.sourcePos="3:37:8";
		};
		this.blocks[7]=function(aoz,vars)
		{
			// CUR_ID$ = ID$ : CUR_TYPE$ = HTML Element Attribute$( ID$, "class" )
			aoz.sourcePos="3:38:8";
			this.root.vars.CUR_ID$=vars.ID$;
			aoz.sourcePos="3:38:24";
			this.root.vars.CUR_TYPE$=HTML_Element_Attribute( vars.ID$, "class", 'string' ) ;
			// HTML Element CUR_ID$, ClassName$ = CUR_TYPE$ + " select-topic"
			aoz.sourcePos="3:39:8";
			HTML_Element(
			{
				index: this.root.vars.CUR_ID$,
				className: this.root.vars.CUR_TYPE$+" select-topic",
				content: "",
				style: "",
				focus: this.aoz.platformTrue,
				visible: this.aoz.platformTrue,
				enable: this.aoz.platformTrue,
				value: "",
				source: "",
				checked: -255,
				onFocus: "",
				onBlur: "",
				onClick: "",
				onDoubleClick: "",
				onMouseDown: "",
				onMouseUp: "",
				onMouseMove: "",
				onMouseEnter: "",
				onMouseOver: "",
				onMouseOut: "",
				onKeyPress: "",
				onKeyDown: "",
				onKeyUp: "",
				position: "",
				left: -100101,
				right: -100101,
				top: -100101,
				bottom: -100101,
				zIndex: -1,
				width: -1,
				height: -1,
				startX: -100101,
				startY: -100101,
				endX: -100101,
				endY: -100101,
				duration: 1000
			} );
			// End If
			aoz.sourcePos="3:40:4";
		};
		this.blocks[8]=function(aoz,vars)
		{
			// StackEdit Open URL$ = ROOT_URL$ + "/php/index.php?page=" + URL$, OnSuccess$="_ON_PAGE_LOADED"
			aoz.sourcePos="3:41:4";
			if( MDParser == undefined )
			{
				throw "md_parser_js_not_loaded";
			}
			if( this.root.vars.ROOT_URL$+"/php/index.php?page="+vars.URL$ == undefined || this.root.vars.ROOT_URL$+"/php/index.php?page="+vars.URL$ == '' )
			{
				throw "md_load_url_missed";
			}
			MDParser.open( this.root.vars.ROOT_URL$+"/php/index.php?page="+vars.URL$, "_ON_PAGE_LOADED", "" );
			// End Procedure
			return{type:0};
		};
	};
	this.p_page_edit=function(aoz,parent,args)
	{
		this.aoz=aoz;
		this.root=parent.root;
		this.className="procedure";
		this.parent=parent;
		this.vars={};
		this.parent.procParam=0;
		this.parent.procParam$="";
		for ( v in args )
		{
			if ( typeof args[ v ] != "undefined" ) 
				this.vars[ v ] = args[v];
		}
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// StackEdit Edit CODE$ = CURRENT_CODE$, OnClose$ = "_CLOSE_EDIT"
			aoz.sourcePos="3:45:4";
			if( MDParser == undefined )
			{
				throw "md_parser_js_not_loaded";
			}
			if( this.root.vars.CURRENT_CODE$ == undefined || this.root.vars.CURRENT_CODE$ == '' )
			{
				throw "no_markdown_code_to_parse";
			}
			if( Stackedit == undefined )
			{
				throw "stackedit_lib_not_loaded";
			}
			MDParser.edit( this.root.vars.CURRENT_CODE$, "", "_CLOSE_EDIT" );
			// End Procedure
			return{type:0};
		};
	};
	this.p__close_edit=function(aoz,parent,args)
	{
		this.aoz=aoz;
		this.root=parent.root;
		this.className="procedure";
		this.parent=parent;
		this.vars={};
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.vars.CODE$="";
		for ( v in args )
		{
			if ( typeof args[ v ] != "undefined" ) 
				this.vars[ v ] = args[v];
		}
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// _ON_PAGE_LOADED[ CODE$ ]
			aoz.sourcePos="3:49:4";
			return{type:4,procedure:"_on_page_loaded",args:{CODE$:vars.CODE$}};
		};
		this.blocks[1]=function(aoz,vars)
		{
			// End Proc
			return{type:0};
		};
	};
	this.p__on_topics_loaded=function(aoz,parent,args)
	{
		this.aoz=aoz;
		this.root=parent.root;
		this.className="procedure";
		this.parent=parent;
		this.vars={};
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.vars.CODE$="";
		for ( v in args )
		{
			if ( typeof args[ v ] != "undefined" ) 
				this.vars[ v ] = args[v];
		}
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// CODE$ = Replace$(CODE$, "procedure:PAGE_LOAD(", "javascript:application.aoz.runProcedure( 'PAGE_LOAD'," )
			aoz.sourcePos="3:54:4";
			vars.CODE$=aoz.utilities.replaceStringInText(vars.CODE$,"procedure:PAGE_LOAD(","javascript:application.aoz.runProcedure( 'PAGE_LOAD',") ;
			// CODE$ = Replace$(CODE$, "md/documentation/", "" )
			aoz.sourcePos="3:55:4";
			vars.CODE$=aoz.utilities.replaceStringInText(vars.CODE$,"md/documentation/","") ;
			// HTML Element "topics", Content$=CODE$
			aoz.sourcePos="3:56:4";
			HTML_Element(
			{
				index: "topics",
				className: "",
				content: vars.CODE$,
				style: "",
				focus: this.aoz.platformTrue,
				visible: this.aoz.platformTrue,
				enable: this.aoz.platformTrue,
				value: "",
				source: "",
				checked: -255,
				onFocus: "",
				onBlur: "",
				onClick: "",
				onDoubleClick: "",
				onMouseDown: "",
				onMouseUp: "",
				onMouseMove: "",
				onMouseEnter: "",
				onMouseOver: "",
				onMouseOut: "",
				onKeyPress: "",
				onKeyDown: "",
				onKeyUp: "",
				position: "",
				left: -100101,
				right: -100101,
				top: -100101,
				bottom: -100101,
				zIndex: -1,
				width: -1,
				height: -1,
				startX: -100101,
				startY: -100101,
				endX: -100101,
				endY: -100101,
				duration: 1000
			} );
			// End Procedure
			return{type:0};
		};
	};
	this.p__on_page_loaded=function(aoz,parent,args)
	{
		this.aoz=aoz;
		this.root=parent.root;
		this.className="procedure";
		this.parent=parent;
		this.vars={};
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.vars.CODE$="";
		for ( v in args )
		{
			if ( typeof args[ v ] != "undefined" ) 
				this.vars[ v ] = args[v];
		}
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// CURRENT_CODE$ = CODE$
			aoz.sourcePos="3:61:4";
			this.root.vars.CURRENT_CODE$=vars.CODE$;
			// StackEdit Show CODE$, "page"
			aoz.sourcePos="3:62:4";
			if( MDParser == undefined )
			{
				throw "md_parser_js_not_loaded";
			}
			if( vars.CODE$ == undefined || vars.CODE$ == '' )
			{
				throw "no_markdown_code_to_parse";
			}
			if( Stackedit == undefined )
			{
				throw "stackedit_lib_not_loaded";
			}
			MDParser.show( vars.CODE$, "page" );
			// End Procedure
			return{type:0};
		};
	};
	this.p_previous_page=function(aoz,parent,args)
	{
		this.aoz=aoz;
		this.root=parent.root;
		this.className="procedure";
		this.parent=parent;
		this.vars={};
		this.parent.procParam=0;
		this.parent.procParam$="";
		for ( v in args )
		{
			if ( typeof args[ v ] != "undefined" ) 
				this.vars[ v ] = args[v];
		}
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// If CUR_HISTO > 1
			aoz.sourcePos="3:67:4";
			if(!((this.root.vars.CUR_HISTO)>(1)))
				return{type:1,label:7};
		};
		this.blocks[1]=function(aoz,vars)
		{
			// CUR_HISTO = CUR_HISTO - 1
			aoz.sourcePos="3:68:8";
			this.root.vars.CUR_HISTO=aoz.fp2Int(this.root.vars.CUR_HISTO-1);
			// If MID$( HISTO_PAGE$( CUR_HISTO ), 0, 7 ) = "SEARCH:"
			aoz.sourcePos="3:69:8";
			if(!((this.aoz.getMid$(this.root.vars.HISTO_PAGE$_array.getValue([this.root.vars.CUR_HISTO]),0,7))==("SEARCH:")))
				return{type:1,label:4};
		};
		this.blocks[2]=function(aoz,vars)
		{
			// KEY_SEARCH[ "Enter", MID$( HISTO_PAGE$( CUR_HISTO ), 7, LEN( HISTO_PAGE$( CUR_HISTO ) ) ), False ]
			aoz.sourcePos="3:71:12";
			return{type:4,procedure:"key_search",args:{CKEY$:"Enter",VALUE$:this.aoz.getMid$(this.root.vars.HISTO_PAGE$_array.getValue([this.root.vars.CUR_HISTO]),7,this.root.vars.HISTO_PAGE$_array.getValue([this.root.vars.CUR_HISTO]).length),ISNEW:false}};
		};
		this.blocks[3]=function(aoz,vars)
		{
			// Else
			return{type:1,label:6};
		};
		this.blocks[4]=function(aoz,vars)
		{
			// PAGE_LOAD[ "", HISTO_PAGE$( CUR_HISTO ), False ]
			aoz.sourcePos="3:73:12";
			return{type:4,procedure:"page_load",args:{ID$:"",URL$:this.root.vars.HISTO_PAGE$_array.getValue([this.root.vars.CUR_HISTO]),IS_NEW:false}};
		};
		this.blocks[5]=function(aoz,vars)
		{
			// End If
			aoz.sourcePos="3:74:8";
		};
		this.blocks[6]=function(aoz,vars)
		{
			// End If
			aoz.sourcePos="3:75:4";
		};
		this.blocks[7]=function(aoz,vars)
		{
			// End Procedure
			return{type:0};
		};
	};
	this.p_next_page=function(aoz,parent,args)
	{
		this.aoz=aoz;
		this.root=parent.root;
		this.className="procedure";
		this.parent=parent;
		this.vars={};
		this.parent.procParam=0;
		this.parent.procParam$="";
		for ( v in args )
		{
			if ( typeof args[ v ] != "undefined" ) 
				this.vars[ v ] = args[v];
		}
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// If CUR_HISTO < 1000 And HISTO_PAGE$( CUR_HISTO + 1 ) <> ""
			aoz.sourcePos="3:80:4";
			if(!(((this.root.vars.CUR_HISTO)<(1000))&&((this.root.vars.HISTO_PAGE$_array.getValue([this.root.vars.CUR_HISTO+1]))!=(""))))
				return{type:1,label:7};
		};
		this.blocks[1]=function(aoz,vars)
		{
			// CUR_HISTO = CUR_HISTO + 1
			aoz.sourcePos="3:81:8";
			this.root.vars.CUR_HISTO=aoz.fp2Int(this.root.vars.CUR_HISTO+1);
			// If MID$( HISTO_PAGE$( CUR_HISTO ), 0, 7 ) = "SEARCH:"
			aoz.sourcePos="3:82:8";
			if(!((this.aoz.getMid$(this.root.vars.HISTO_PAGE$_array.getValue([this.root.vars.CUR_HISTO]),0,7))==("SEARCH:")))
				return{type:1,label:4};
		};
		this.blocks[2]=function(aoz,vars)
		{
			// KEY_SEARCH[ "Enter", MID$( HISTO_PAGE$( CUR_HISTO ), 7, LEN( HISTO_PAGE$( CUR_HISTO ) ) ), False ]
			aoz.sourcePos="3:84:12";
			return{type:4,procedure:"key_search",args:{CKEY$:"Enter",VALUE$:this.aoz.getMid$(this.root.vars.HISTO_PAGE$_array.getValue([this.root.vars.CUR_HISTO]),7,this.root.vars.HISTO_PAGE$_array.getValue([this.root.vars.CUR_HISTO]).length),ISNEW:false}};
		};
		this.blocks[3]=function(aoz,vars)
		{
			// Else
			return{type:1,label:6};
		};
		this.blocks[4]=function(aoz,vars)
		{
			// PAGE_LOAD[ "", HISTO_PAGE$( CUR_HISTO ), False ]
			aoz.sourcePos="3:86:12";
			return{type:4,procedure:"page_load",args:{ID$:"",URL$:this.root.vars.HISTO_PAGE$_array.getValue([this.root.vars.CUR_HISTO]),IS_NEW:false}};
		};
		this.blocks[5]=function(aoz,vars)
		{
			// End If
			aoz.sourcePos="3:87:8";
		};
		this.blocks[6]=function(aoz,vars)
		{
			// End If
			aoz.sourcePos="3:88:4";
		};
		this.blocks[7]=function(aoz,vars)
		{
			// End Procedure
			return{type:0};
		};
	};
	this.p_key_search=function(aoz,parent,args)
	{
		this.aoz=aoz;
		this.root=parent.root;
		this.className="procedure";
		this.parent=parent;
		this.vars={};
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.vars.CKEY$="";
		this.vars.VALUE$="";
		this.vars.ISNEW=0;
		for ( v in args )
		{
			if ( typeof args[ v ] != "undefined" ) 
				this.vars[ v ] = args[v];
		}
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// If CKEY$ = "Enter"
			aoz.sourcePos="3:92:4";
			if(!((vars.CKEY$)==("Enter")))
				return{type:1,label:8};
		};
		this.blocks[1]=function(aoz,vars)
		{
			// If ISNEW
			aoz.sourcePos="3:93:8";
			if(!(vars.ISNEW))
				return{type:1,label:7};
		};
		this.blocks[2]=function(aoz,vars)
		{
			// If CUR_HISTO < 1000
			aoz.sourcePos="3:94:12";
			if(!((this.root.vars.CUR_HISTO)<(1000)))
				return{type:1,label:6};
		};
		this.blocks[3]=function(aoz,vars)
		{
			// CUR_HISTO = CUR_HISTO + 1
			aoz.sourcePos="3:95:16";
			this.root.vars.CUR_HISTO=aoz.fp2Int(this.root.vars.CUR_HISTO+1);
			// For R = CUR_HISTO To 1000 : HISTO_PAGE$( R ) = "" : Next R
			aoz.sourcePos="3:96:16";
			vars.R=aoz.fp2Int(this.root.vars.CUR_HISTO);
		};
		this.blocks[4]=function(aoz,vars)
		{
			aoz.sourcePos="3:96:44";
			this.root.vars.HISTO_PAGE$_array.setValue([vars.R],"")
			aoz.sourcePos="3:96:68";
			vars.R+=1;
			if(vars.R<=1000)
				return{type:1,label:4};
		};
		this.blocks[5]=function(aoz,vars)
		{
			// End If
			aoz.sourcePos="3:97:12";
		};
		this.blocks[6]=function(aoz,vars)
		{
			// End If
			aoz.sourcePos="3:98:8";
		};
		this.blocks[7]=function(aoz,vars)
		{
			// HISTO_PAGE$( CUR_HISTO ) = "SEARCH:" + VALUE$
			aoz.sourcePos="3:99:8";
			this.root.vars.HISTO_PAGE$_array.setValue([this.root.vars.CUR_HISTO],"SEARCH:"+vars.VALUE$)
			// JS Execute "search( '" + VALUE$ + "' );"
			aoz.sourcePos="3:100:8";
			JS_Execute( "search( '"+vars.VALUE$+"' );" );
			// End If
			aoz.sourcePos="3:101:4";
		};
		this.blocks[8]=function(aoz,vars)
		{
			// End Procedure
			return{type:0};
		};
	};
	this.aoz.run(this,0,args);
	this.aoz.v1_0_aozhtml=new v1_0_aozhtml(this.aoz,args);
	this.aoz.v1_0_asset=new v1_0_asset(this.aoz,args);
	this.aoz.v1_0_banks=new v1_0_banks(this.aoz,args);
	this.aoz.v1_0_collisions=new v1_0_collisions(this.aoz,args);
	this.aoz.v1_0_sprites=new v1_0_sprites(this.aoz,args);
	this.aoz.v1_0_strings=new v1_0_strings(this.aoz,args);
	this.aoz.v1_0_td=new v1_0_td(this.aoz,args);
	this.aoz.v1_0_time=new v1_0_time(this.aoz,args);
	this.aoz.ext_tracker=new ext_tracker(this.aoz,args);
};
