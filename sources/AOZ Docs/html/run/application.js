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
// Compiled with AOZ Transpiler Version 14.03 on the 07/01/2023-23:44:34
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
		sources: JSON.parse(atob('W3sicGF0aCI6Ii9ob21lL2JhcHRpc3RlL2Fvei9hb3otZG9jcy9zb3VyY2VzL0FPWiBEb2NzL0FPWiBEb2NzLmFveiIsInNvdXJjZSI6IkxvYWQgQXNzZXQgXCJodHRwczovL2Nkbi5tZXRyb3VpLm9yZy51YS92NC9jc3MvbWV0cm8tYWxsLm1pbi5jc3NcIiwgXCJtZXRyby1jc3NcIlxuTG9hZCBBc3NldCBcImh0dHBzOi8vY2RuLm1ldHJvdWkub3JnLnVhL3Y0L2pzL21ldHJvLm1pbi5qc1wiLCBcIm1ldHJvLWpzXCJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL3ByaXNtLmNzc1wiLCBcInByaXNtLWNzc1wiXG5Mb2FkIEFzc2V0IFwiaHR0cHM6Ly9zdGFja2VkaXQuaW8vc3R5bGUuY3NzXCIsIFwic3RhY2tlZGl0LWNzc1wiXG5Mb2FkIEFzc2V0IFwiaHR0cHM6Ly91bnBrZy5jb20vc3RhY2tlZGl0LWpzQDEuMC43L2RvY3MvbGliL3N0YWNrZWRpdC5taW4uanNcIiwgXCJzdGFja2VkaXQtanNcIlxuTG9hZCBBc3NldCBcInd3dy9qcy9saWJzL3N0cmluZy11dGlscy5qc1wiLCBcInN0cmluZ191dGlsc1wiXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2xpYnMvbWQtcGFyc2VyLmpzXCIsIFwibWQtcGFyc2VyXCJcbkxvYWQgQXNzZXQgXCJ3d3cvanMvbGlicy9wcmlzbS5qc1wiLCBcInByaXNtLWpzXCJcbkxvYWQgQXNzZXQgXCJ3d3cvanMvbGlicy9sYW5ndWFnZXMvYW96Lm1pbi5qc1wiLCBcImFvelwiXG5Mb2FkIEFzc2V0IFwid3d3L3N0eWxlcy9mb250cy9mb250LmNzc1wiLCBcImZvbnQtY3NzXCJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL2ZvbnRzL2R5c2xleGlhL3N0eWxlc2hlZXQuY3NzXCIsIFwiZHlzLWNzc1wiXG5Mb2FkIEFzc2V0IFwid3d3L3N0eWxlcy9nbG9iYWwuY3NzXCIsIFwiZ2xvYmFsLWNzc1wiXG5cbkxvYWQgQXNzZXQgXCJ3d3cvaHRtbC9pbmRleC5odG1sXCIsIFwiaW5kZXhcIlxuTG9hZCBBc3NldCBcInd3dy9qcy9pbmRleC5qc1wiLCBcImluZGV4LWpzXCJcblxuSW5jbHVkZSBcImluY2x1ZGVzL2xhbmd1YWdlL21kLXJlYWRlci5hb3ppbmNcIlxuSW5jbHVkZSBcImluY2x1ZGVzL2xhbmd1YWdlL3RvYXN0LmFvemluY1wiXG5JbmNsdWRlIFwiaW5jbHVkZXMvYXBwLmFvemluY1wiXG5cbkxPQ0FMID0gRmFsc2UgOiBQUkVQID0gRmFsc2UgOiBMT0NBTF9XSE8kID0gXCJCQlwiIDogVVJMX1NFQVJDSCQgPSBcIlwiXG5cbkdsb2JhbCBMT0NBTCwgUFJFUCwgTE9DQUxfV0hPJCwgVVJMX1NFQVJDSCRcbldhaXQgMiA6IE1BSU4gOiBXYWl0XG5cbmNsYXBmaW5cbiIsIm51bWJlciI6MCwicGFyZW50IjpudWxsLCJvZmZzZXRMaW5lcyI6MH0seyJwYXRoIjoiaW5jbHVkZXMvbGFuZ3VhZ2UvbWQtcmVhZGVyLmFvemluYyIsInNvdXJjZSI6Ikluc3RydWN0aW9uIFN0YWNrRWRpdCBPcGVuLCBVUkwkLCBPblN1Y2Nlc3MkPVwiXCIsIE9uRXJyb3IkPVwiXCJcbntcblx0I2Vycm9yc1xuXHRpZiggTURQYXJzZXIgPT0gdW5kZWZpbmVkIClcblx0e1xuXHRcdHRocm93IFwibWRfcGFyc2VyX2pzX25vdF9sb2FkZWRcIjtcblx0fVxuXG5cdGlmKCAlVVJMJCA9PSB1bmRlZmluZWQgfHwgJVVSTCQgPT0gJycgKVxuXHR7XG5cdFx0dGhyb3cgXCJtZF9sb2FkX3VybF9taXNzZWRcIjtcblx0fVxuXG5cdE1EUGFyc2VyLm9wZW4oICVVUkwkLCAlT25TdWNjZXNzJCwgJU9uRXJyb3IkICk7XG59XG5FbmQgSW5zdHJ1Y3Rpb25cblxuXG5JbnN0cnVjdGlvbiBTdGFja0VkaXQgU2hvdywgQ09ERSQsIEhUTUxfSUQkXG57XG5cdCNlcnJvcnNcblx0aWYoIE1EUGFyc2VyID09IHVuZGVmaW5lZCApXG5cdHtcblx0XHR0aHJvdyBcIm1kX3BhcnNlcl9qc19ub3RfbG9hZGVkXCI7XG5cdH1cblxuXHRpZiggJUNPREUkID09IHVuZGVmaW5lZCB8fCAlQ09ERSQgPT0gJycgKVxuXHR7XG5cdFx0dGhyb3cgXCJub19tYXJrZG93bl9jb2RlX3RvX3BhcnNlXCI7XG5cdH1cblxuXHRpZiggU3RhY2tlZGl0ID09IHVuZGVmaW5lZCApXG5cdHtcblx0XHR0aHJvdyBcInN0YWNrZWRpdF9saWJfbm90X2xvYWRlZFwiO1xuXHR9XG5cblx0TURQYXJzZXIuc2hvdyggJUNPREUkLCAlSFRNTF9JRCQgKTtcbn1cbkVuZCBJbnN0cnVjdGlvblxuXG5JbnN0cnVjdGlvbiBTdGFja0VkaXQgRWRpdCwgQ09ERSQsIE9uQ2hhbmdlJCA9IFwiXCIsIE9uQ2xvc2UkID0gXCJcIlxue1xuXHQjZXJyb3JzXG5cdGlmKCBNRFBhcnNlciA9PSB1bmRlZmluZWQgKVxuXHR7XG5cdFx0dGhyb3cgXCJtZF9wYXJzZXJfanNfbm90X2xvYWRlZFwiO1xuXHR9XG5cblx0aWYoICVDT0RFJCA9PSB1bmRlZmluZWQgfHwgJUNPREUkID09ICcnIClcblx0e1xuXHRcdHRocm93IFwibm9fbWFya2Rvd25fY29kZV90b19wYXJzZVwiO1xuXHR9XG5cblx0aWYoIFN0YWNrZWRpdCA9PSB1bmRlZmluZWQgKVxuXHR7XG5cdFx0dGhyb3cgXCJzdGFja2VkaXRfbGliX25vdF9sb2FkZWRcIjtcblx0fVxuXG5cdE1EUGFyc2VyLmVkaXQoICVDT0RFJCwgJU9uQ2hhbmdlJCwgJU9uQ2xvc2UkICk7XG59XG5FbmQgSW5zdHJ1Y3Rpb25cblxuSW5zdHJ1Y3Rpb24gU3RhY2tFZGl0IFNhdmUsIFBhZ2UkLCBDb2RlJCwgT25TdWNjZXNzJD1cIlwiLCBPbkVycm9yJD1cIlwiXG57XG5cdCNlcnJvcnNcblx0TURQYXJzZXIuc2F2ZSggJVBhZ2UkLCAlQ29kZSQsICVPblN1Y2Nlc3MkLCAlT25FcnJvciQgKTtcbn1cbkVuZCBJbnN0cnVjdGlvblxuIiwibnVtYmVyIjoxLCJwYXJlbnQiOnsicGF0aCI6Ii9ob21lL2JhcHRpc3RlL2Fvei9hb3otZG9jcy9zb3VyY2VzL0FPWiBEb2NzL0FPWiBEb2NzLmFveiIsInNvdXJjZSI6IkxvYWQgQXNzZXQgXCJodHRwczovL2Nkbi5tZXRyb3VpLm9yZy51YS92NC9jc3MvbWV0cm8tYWxsLm1pbi5jc3NcIiwgXCJtZXRyby1jc3NcIlxuTG9hZCBBc3NldCBcImh0dHBzOi8vY2RuLm1ldHJvdWkub3JnLnVhL3Y0L2pzL21ldHJvLm1pbi5qc1wiLCBcIm1ldHJvLWpzXCJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL3ByaXNtLmNzc1wiLCBcInByaXNtLWNzc1wiXG5Mb2FkIEFzc2V0IFwiaHR0cHM6Ly9zdGFja2VkaXQuaW8vc3R5bGUuY3NzXCIsIFwic3RhY2tlZGl0LWNzc1wiXG5Mb2FkIEFzc2V0IFwiaHR0cHM6Ly91bnBrZy5jb20vc3RhY2tlZGl0LWpzQDEuMC43L2RvY3MvbGliL3N0YWNrZWRpdC5taW4uanNcIiwgXCJzdGFja2VkaXQtanNcIlxuTG9hZCBBc3NldCBcInd3dy9qcy9saWJzL3N0cmluZy11dGlscy5qc1wiLCBcInN0cmluZ191dGlsc1wiXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2xpYnMvbWQtcGFyc2VyLmpzXCIsIFwibWQtcGFyc2VyXCJcbkxvYWQgQXNzZXQgXCJ3d3cvanMvbGlicy9wcmlzbS5qc1wiLCBcInByaXNtLWpzXCJcbkxvYWQgQXNzZXQgXCJ3d3cvanMvbGlicy9sYW5ndWFnZXMvYW96Lm1pbi5qc1wiLCBcImFvelwiXG5Mb2FkIEFzc2V0IFwid3d3L3N0eWxlcy9mb250cy9mb250LmNzc1wiLCBcImZvbnQtY3NzXCJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL2ZvbnRzL2R5c2xleGlhL3N0eWxlc2hlZXQuY3NzXCIsIFwiZHlzLWNzc1wiXG5Mb2FkIEFzc2V0IFwid3d3L3N0eWxlcy9nbG9iYWwuY3NzXCIsIFwiZ2xvYmFsLWNzc1wiXG5cbkxvYWQgQXNzZXQgXCJ3d3cvaHRtbC9pbmRleC5odG1sXCIsIFwiaW5kZXhcIlxuTG9hZCBBc3NldCBcInd3dy9qcy9pbmRleC5qc1wiLCBcImluZGV4LWpzXCJcblxuSW5jbHVkZSBcImluY2x1ZGVzL2xhbmd1YWdlL21kLXJlYWRlci5hb3ppbmNcIlxuSW5jbHVkZSBcImluY2x1ZGVzL2xhbmd1YWdlL3RvYXN0LmFvemluY1wiXG5JbmNsdWRlIFwiaW5jbHVkZXMvYXBwLmFvemluY1wiXG5cbkxPQ0FMID0gRmFsc2UgOiBQUkVQID0gRmFsc2UgOiBMT0NBTF9XSE8kID0gXCJCQlwiIDogVVJMX1NFQVJDSCQgPSBcIlwiXG5cbkdsb2JhbCBMT0NBTCwgUFJFUCwgTE9DQUxfV0hPJCwgVVJMX1NFQVJDSCRcbldhaXQgMiA6IE1BSU4gOiBXYWl0XG5cbmNsYXBmaW5cbiIsIm51bWJlciI6MCwicGFyZW50IjpudWxsLCJvZmZzZXRMaW5lcyI6MH0sIm9mZnNldExpbmVzIjoxNn0seyJwYXRoIjoiaW5jbHVkZXMvbGFuZ3VhZ2UvdG9hc3QuYW96aW5jIiwic291cmNlIjoiSW5zdHJ1Y3Rpb24gVG9hc3QsIFRleHQkLCBUeXBlJD1cInByaW1hcnlcIiwgU2hvd1RvcCA9IEZhbHNlLCBEdXJhdGlvbiA9IDMwMDAsIENhbGxCYWNrJD1cIlwiXG57XG5cdCNlcnJvcnNcblx0aWYoIE1ldHJvID09IHVuZGVmaW5lZCApXG5cdHtcblx0XHR0aHJvdyBcIm1ldHJvX3VpX2xpYl9ub3RfbG9hZGVkXCI7XG5cdH1cblxuXHR2YXIgb3B0aW9ucyA9XG5cdHtcblx0ICAgIGNhbGxiYWNrOiBNZXRyby5ub29wLFxuXHQgICAgdGltZW91dDogJUR1cmF0aW9uLFxuXHQgICAgZGlzdGFuY2U6IDIwLFxuXHQgICAgc2hvd1RvcDogJVNob3dUb3AsXG5cdCAgICBjbHNUb2FzdDogXCJcIlxuXHR9XG5cblx0aWYoICVDYWxsQmFjayQgIT0gJycgKVxuXHR7XG4gXHRcdG9wdGlvbnMuY2FsbGJhY2sgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0YXBwbGljYXRpb24uYW96LnJ1blByb2NlZHVyZSggJUNhbGxCYWNrJCwge30gKTtcblx0XHR9XG5cdH1cblxuXHRNZXRyby50b2FzdC5jcmVhdGUoICVUZXh0JCwgbnVsbCwgbnVsbCwgbnVsbCwgb3B0aW9ucyApO1xufVxuRW5kIEluc3RydWN0aW9uXG4iLCJudW1iZXIiOjIsInBhcmVudCI6eyJwYXRoIjoiaW5jbHVkZXMvbGFuZ3VhZ2UvbWQtcmVhZGVyLmFvemluYyIsInNvdXJjZSI6Ikluc3RydWN0aW9uIFN0YWNrRWRpdCBPcGVuLCBVUkwkLCBPblN1Y2Nlc3MkPVwiXCIsIE9uRXJyb3IkPVwiXCJcbntcblx0I2Vycm9yc1xuXHRpZiggTURQYXJzZXIgPT0gdW5kZWZpbmVkIClcblx0e1xuXHRcdHRocm93IFwibWRfcGFyc2VyX2pzX25vdF9sb2FkZWRcIjtcblx0fVxuXG5cdGlmKCAlVVJMJCA9PSB1bmRlZmluZWQgfHwgJVVSTCQgPT0gJycgKVxuXHR7XG5cdFx0dGhyb3cgXCJtZF9sb2FkX3VybF9taXNzZWRcIjtcblx0fVxuXG5cdE1EUGFyc2VyLm9wZW4oICVVUkwkLCAlT25TdWNjZXNzJCwgJU9uRXJyb3IkICk7XG59XG5FbmQgSW5zdHJ1Y3Rpb25cblxuXG5JbnN0cnVjdGlvbiBTdGFja0VkaXQgU2hvdywgQ09ERSQsIEhUTUxfSUQkXG57XG5cdCNlcnJvcnNcblx0aWYoIE1EUGFyc2VyID09IHVuZGVmaW5lZCApXG5cdHtcblx0XHR0aHJvdyBcIm1kX3BhcnNlcl9qc19ub3RfbG9hZGVkXCI7XG5cdH1cblxuXHRpZiggJUNPREUkID09IHVuZGVmaW5lZCB8fCAlQ09ERSQgPT0gJycgKVxuXHR7XG5cdFx0dGhyb3cgXCJub19tYXJrZG93bl9jb2RlX3RvX3BhcnNlXCI7XG5cdH1cblxuXHRpZiggU3RhY2tlZGl0ID09IHVuZGVmaW5lZCApXG5cdHtcblx0XHR0aHJvdyBcInN0YWNrZWRpdF9saWJfbm90X2xvYWRlZFwiO1xuXHR9XG5cblx0TURQYXJzZXIuc2hvdyggJUNPREUkLCAlSFRNTF9JRCQgKTtcbn1cbkVuZCBJbnN0cnVjdGlvblxuXG5JbnN0cnVjdGlvbiBTdGFja0VkaXQgRWRpdCwgQ09ERSQsIE9uQ2hhbmdlJCA9IFwiXCIsIE9uQ2xvc2UkID0gXCJcIlxue1xuXHQjZXJyb3JzXG5cdGlmKCBNRFBhcnNlciA9PSB1bmRlZmluZWQgKVxuXHR7XG5cdFx0dGhyb3cgXCJtZF9wYXJzZXJfanNfbm90X2xvYWRlZFwiO1xuXHR9XG5cblx0aWYoICVDT0RFJCA9PSB1bmRlZmluZWQgfHwgJUNPREUkID09ICcnIClcblx0e1xuXHRcdHRocm93IFwibm9fbWFya2Rvd25fY29kZV90b19wYXJzZVwiO1xuXHR9XG5cblx0aWYoIFN0YWNrZWRpdCA9PSB1bmRlZmluZWQgKVxuXHR7XG5cdFx0dGhyb3cgXCJzdGFja2VkaXRfbGliX25vdF9sb2FkZWRcIjtcblx0fVxuXG5cdE1EUGFyc2VyLmVkaXQoICVDT0RFJCwgJU9uQ2hhbmdlJCwgJU9uQ2xvc2UkICk7XG59XG5FbmQgSW5zdHJ1Y3Rpb25cblxuSW5zdHJ1Y3Rpb24gU3RhY2tFZGl0IFNhdmUsIFBhZ2UkLCBDb2RlJCwgT25TdWNjZXNzJD1cIlwiLCBPbkVycm9yJD1cIlwiXG57XG5cdCNlcnJvcnNcblx0TURQYXJzZXIuc2F2ZSggJVBhZ2UkLCAlQ29kZSQsICVPblN1Y2Nlc3MkLCAlT25FcnJvciQgKTtcbn1cbkVuZCBJbnN0cnVjdGlvblxuIiwibnVtYmVyIjoxLCJwYXJlbnQiOnsicGF0aCI6Ii9ob21lL2JhcHRpc3RlL2Fvei9hb3otZG9jcy9zb3VyY2VzL0FPWiBEb2NzL0FPWiBEb2NzLmFveiIsInNvdXJjZSI6IkxvYWQgQXNzZXQgXCJodHRwczovL2Nkbi5tZXRyb3VpLm9yZy51YS92NC9jc3MvbWV0cm8tYWxsLm1pbi5jc3NcIiwgXCJtZXRyby1jc3NcIlxuTG9hZCBBc3NldCBcImh0dHBzOi8vY2RuLm1ldHJvdWkub3JnLnVhL3Y0L2pzL21ldHJvLm1pbi5qc1wiLCBcIm1ldHJvLWpzXCJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL3ByaXNtLmNzc1wiLCBcInByaXNtLWNzc1wiXG5Mb2FkIEFzc2V0IFwiaHR0cHM6Ly9zdGFja2VkaXQuaW8vc3R5bGUuY3NzXCIsIFwic3RhY2tlZGl0LWNzc1wiXG5Mb2FkIEFzc2V0IFwiaHR0cHM6Ly91bnBrZy5jb20vc3RhY2tlZGl0LWpzQDEuMC43L2RvY3MvbGliL3N0YWNrZWRpdC5taW4uanNcIiwgXCJzdGFja2VkaXQtanNcIlxuTG9hZCBBc3NldCBcInd3dy9qcy9saWJzL3N0cmluZy11dGlscy5qc1wiLCBcInN0cmluZ191dGlsc1wiXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2xpYnMvbWQtcGFyc2VyLmpzXCIsIFwibWQtcGFyc2VyXCJcbkxvYWQgQXNzZXQgXCJ3d3cvanMvbGlicy9wcmlzbS5qc1wiLCBcInByaXNtLWpzXCJcbkxvYWQgQXNzZXQgXCJ3d3cvanMvbGlicy9sYW5ndWFnZXMvYW96Lm1pbi5qc1wiLCBcImFvelwiXG5Mb2FkIEFzc2V0IFwid3d3L3N0eWxlcy9mb250cy9mb250LmNzc1wiLCBcImZvbnQtY3NzXCJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL2ZvbnRzL2R5c2xleGlhL3N0eWxlc2hlZXQuY3NzXCIsIFwiZHlzLWNzc1wiXG5Mb2FkIEFzc2V0IFwid3d3L3N0eWxlcy9nbG9iYWwuY3NzXCIsIFwiZ2xvYmFsLWNzc1wiXG5cbkxvYWQgQXNzZXQgXCJ3d3cvaHRtbC9pbmRleC5odG1sXCIsIFwiaW5kZXhcIlxuTG9hZCBBc3NldCBcInd3dy9qcy9pbmRleC5qc1wiLCBcImluZGV4LWpzXCJcblxuSW5jbHVkZSBcImluY2x1ZGVzL2xhbmd1YWdlL21kLXJlYWRlci5hb3ppbmNcIlxuSW5jbHVkZSBcImluY2x1ZGVzL2xhbmd1YWdlL3RvYXN0LmFvemluY1wiXG5JbmNsdWRlIFwiaW5jbHVkZXMvYXBwLmFvemluY1wiXG5cbkxPQ0FMID0gRmFsc2UgOiBQUkVQID0gRmFsc2UgOiBMT0NBTF9XSE8kID0gXCJCQlwiIDogVVJMX1NFQVJDSCQgPSBcIlwiXG5cbkdsb2JhbCBMT0NBTCwgUFJFUCwgTE9DQUxfV0hPJCwgVVJMX1NFQVJDSCRcbldhaXQgMiA6IE1BSU4gOiBXYWl0XG5cbmNsYXBmaW5cbiIsIm51bWJlciI6MCwicGFyZW50IjpudWxsLCJvZmZzZXRMaW5lcyI6MH0sIm9mZnNldExpbmVzIjoxNn0sIm9mZnNldExpbmVzIjo4Nn0seyJwYXRoIjoiaW5jbHVkZXMvYXBwLmFvemluYyIsInNvdXJjZSI6IkxBTkckID0gXCJlblwiIDogQ1VSUkVOVF9QQUdFJCA9IFwidXNlcl9ndWlkZS90YWJsZV9vZl9jb250ZW50cy8wMDBfY2hhcHRlci50eHRcIiA6IENVUlJFTlRfQ09ERSQgPSBcIlwiXG5ST09UX1VSTCQgPSBcImh0dHBzOi8vZG9jLmFvei5zdHVkaW8vXCIgOiBDVVJfSUQkID0gXCJcIiA6IENVUl9UWVBFJCA9IFwiXCJcblxuRGltIEhJU1RPX1BBR0UkKCAxMDAwICkgOiBDVVJfSElTVE8gPSAxIDogQ0hFQVRfQUNDRVNTID0gRmFsc2Vcbkdsb2JhbCBDVVJfSUQkLCBDVVJfVFlQRSQsIFJPT1RfVVJMJCwgTEFORyQsIENVUlJFTlRfUEFHRSQsIEhJU1RPX1BBR0UkKCksIENVUl9ISVNUTywgQ1VSUkVOVF9DT0RFJCwgQ0hFQVRfQUNDRVNTXG5cbi8vIFBvaW50IGRlIGTpcGFydCBkdSBwcm9ncmFtbWVcblByb2NlZHVyZSBNQUlOXG5cdElmIFBSRVAgPSBUcnVlXG5cdFx0Uk9PVF9VUkwkID0gXCJodHRwczovL2RvYy5hb3ouc3R1ZGlvL25leHQvXCJcblx0RW5kIElmXG5cdElmIExPQ0FMID0gVHJ1ZVxuXHRcdElmIExPQ0FMX1dITyQgPSBcIkJQXCJcblx0XHRcdFJPT1RfVVJMJCA9IFwiaHR0cDovL2xvY2FsaG9zdC9hb3ovYW96LWRvY3MvXCJcblx0XHRFbHNlXG5cdFx0XHRST09UX1VSTCQgPSBcImh0dHA6Ly9sb2NhbGhvc3QvYW96ZG9jL1wiXG5cdFx0RW5kIElmXG5cdEVuZCBJZlxuXHRTaG93IEhUTUwgXCJpbmRleFwiXG5cdEpTIEV4ZWN1dGUgXCJpbml0UGFuZWxzKCk7XCJcblx0UkVMT0FEX0xBTkdcbkVuZCBQcm9jZWR1cmVcblxuLy8gUmVjaGFyZ2VtZW50IGRlcyBydWJyaXF1ZXMgZXQgZGUgbGEgcGFnZSBhY3R1ZWxsZSBhdmVjIGxhIGxhbmd1ZSBlbiBjb3Vyc1xuUHJvY2VkdXJlIFJFTE9BRF9MQU5HXG5cdFN0YWNrRWRpdCBPcGVuIFVSTCQgPSBST09UX1VSTCQgKyBcIi9waHAvaW5kZXgucGhwP3BhZ2U9dG9waWNzLnR4dFwiLCBPblN1Y2Nlc3MkPVwiX09OX1RPUElDU19MT0FERURcIlxuXHRJZiBVUkxfU0VBUkNIJCA8PiBcIlwiXG5cdFx0S0VZX1NFQVJDSFsgXCJFbnRlclwiLCBVUkxfU0VBUkNIJCwgVHJ1ZSBdXG5cdFx0VVJMX1NFQVJDSCQgPSBcIlwiXG5cdEVsc2Vcblx0XHRQQUdFX0xPQURbIFwiXCIsIENVUlJFTlRfUEFHRSQsIEZhbHNlIF1cblx0RW5kIGlmXG5FbmQgUHJvY2VkdXJlXG5cblByb2NlZHVyZSBHT19IT01FXG5cdENVUlJFTlRfUEFHRSQgPSBcInVzZXJfZ3VpZGUvdGFibGVfb2ZfY29udGVudHMvMDAwX2NoYXB0ZXIudHh0XCJcblx0UEFHRV9MT0FEWyBcIlwiLCBDVVJSRU5UX1BBR0UkLCBUcnVlIF1cbkVuZCBQcm9jZWR1cmVcblxuLy8gQ2hhcmdlbWVudCBkJ3VuZSBwYWdlXG5Qcm9jZWR1cmUgUEFHRV9MT0FEWyBJRCQsIFVSTCQsIElTX05FVyBdXG5cdENVUlJFTlRfUEFHRSQgPSBVUkwkXG5cdElmIElTX05FVyA9IFRydWVcblx0XHRDVVJfSElTVE8gPSBDVVJfSElTVE8gKyAxXG5cdFx0Rm9yIFIgPSBDVVJfSElTVE8gVG8gMTAwMCA6IEhJU1RPX1BBR0UkKCBSICkgPSBcIlwiIDogTmV4dCBSXG5cdEVuZCBJZlxuXG5cdEhJU1RPX1BBR0UkKCBDVVJfSElTVE8gKSA9IFVSTCRcblx0SWYgSUQkIDw+IFwiXCJcblx0XHRJZiBDVVJfSUQkIDw+IFwiXCIgQW5kIENVUl9JRCQgPD4gSUQkXG5cdFx0XHRIVE1MIEVsZW1lbnQgQ1VSX0lEJCwgQ2xhc3NOYW1lJCA9IENVUl9UWVBFJFxuXHRcdEVuZCBJZlxuXHRcdENVUl9JRCQgPSBJRCQgOiBDVVJfVFlQRSQgPSBIVE1MIEVsZW1lbnQgQXR0cmlidXRlJCggSUQkLCBcImNsYXNzXCIgKVxuXHRcdEhUTUwgRWxlbWVudCBDVVJfSUQkLCBDbGFzc05hbWUkID0gQ1VSX1RZUEUkICsgXCIgc2VsZWN0LXRvcGljXCJcblx0RW5kIElmXG5cdFN0YWNrRWRpdCBPcGVuIFVSTCQgPSBST09UX1VSTCQgKyBcIi9waHAvaW5kZXgucGhwP3BhZ2U9XCIgKyBVUkwkLCBPblN1Y2Nlc3MkPVwiX09OX1BBR0VfTE9BREVEXCJcbkVuZCBQcm9jZWR1cmVcblxuUHJvY2VkdXJlIExPR0lOXG5cdEpTIEV4ZWN1dGUgXCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2xvZ19wd2QnICkudmFsdWUgPSAnJztcIlxuXHRKUyBFeGVjdXRlIFwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdmcm1fbG9naW4nICkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XCJcblxuRW5kIFByb2NlZHVyZVxuXG5Qcm9jZWR1cmUgS0VZX0xPR0lOWyBDS0VZJCwgVkFMVUUkIF1cblx0SWYgQ0tFWSQgPSBcIkVudGVyXCIgQW5kIFZBTFVFJCA9IFwiYWJyYWNhZGFicmFcIlxuXHRcdEpTIEV4ZWN1dGUgXCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ21kX2xvZ2luJyApLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XCJcblx0XHRKUyBFeGVjdXRlIFwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdtZF9nYXRvcicgKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcIlxuXHRcdEpTIEV4ZWN1dGUgXCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2ZybV9sb2dpbicgKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1wiXG5cdFx0SlMgRXhlY3V0ZSBcImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbWRfZWRpdCcgKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcIlxuXHRcdExBTkckID0gXCJlblwiIDogUkVMT0FEX0xBTkdcblx0RW5kIElmXG5FbmQgUHJvY2VkdXJlXG5cblByb2NlZHVyZSBQQUdFX0VESVRcblx0U3RhY2tFZGl0IEVkaXQgQ09ERSQgPSBDVVJSRU5UX0NPREUkLCBPbkNoYW5nZSQgPSBcIl9DSEFOR0VfRURJVFwiLCBPbkNsb3NlJCA9IFwiX0NMT1NFX0VESVRcIlxuRW5kIFByb2NlZHVyZVxuXG5Qcm9jZWR1cmUgX0NIQU5HRV9FRElUWyBDT0RFJCBdXG5cdElmIENPREUkIDw+IENVUlJFTlRfQ09ERSRcblx0XHRDVVJSRU5UX0NPREUkID0gQ09ERSRcblx0XHRKUyBFeGVjdXRlIFwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdtZF9zeW5jJyApLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1wiXG5cdEVuZCBJZlxuRW5kIFByb2NlZHVyZVxuXG5Qcm9jZWR1cmUgX0NMT1NFX0VESVRbIENPREUkIF1cblx0X09OX1BBR0VfTE9BREVEWyBDT0RFJCBdXG5FbmQgUHJvY1xuXG4vLyBMZXMgcnVicmlxdWVzIHNvbnQgY2hhcmfpZXMgPyBBbG9ycyBvbiBsZXMgYWZmaWNoZVxuUHJvY2VkdXJlIF9PTl9UT1BJQ1NfTE9BREVEWyBDT0RFJCBdXG5cdENPREUkID0gUmVwbGFjZSQoQ09ERSQsIFwicHJvY2VkdXJlOlBBR0VfTE9BRChcIiwgXCJqYXZhc2NyaXB0OmFwcGxpY2F0aW9uLmFvei5ydW5Qcm9jZWR1cmUoICdQQUdFX0xPQUQnLFwiIClcblx0Q09ERSQgPSBSZXBsYWNlJChDT0RFJCwgXCJtZC9kb2N1bWVudGF0aW9uL1wiLCBcIlwiIClcblx0SFRNTCBFbGVtZW50IFwidG9waWNzXCIsIENvbnRlbnQkPUNPREUkXG5FbmQgUHJvY2VkdXJlXG5cbi8vIExhIHBhZ2UgZXN0IGNoYXJn6WUgLiBBbG9ycyBvbiBsJ2FmZmljaGVcblByb2NlZHVyZSBfT05fUEFHRV9MT0FERURbIENPREUkIF1cblx0Q1VSUkVOVF9DT0RFJCA9IENPREUkXG5cdFN0YWNrRWRpdCBTaG93IENPREUkLCBcInBhZ2VcIlxuRW5kIFByb2NlZHVyZVxuXG4vLyBQYWdlIHBy6WPpZGVudGVcblByb2NlZHVyZSBQUkVWSU9VU19QQUdFXG5cdElmIENVUl9ISVNUTyA+IDFcblx0XHRDVVJfSElTVE8gPSBDVVJfSElTVE8gLSAxXG5cdFx0SWYgTUlEJCggSElTVE9fUEFHRSQoIENVUl9ISVNUTyApLCAwLCA3ICkgPSBcIlNFQVJDSDpcIlxuXHRcdFx0Ly9DVVJfSElTVE8gPSBDVVJfSElTVE8gLSAxXG5cdFx0XHRLRVlfU0VBUkNIWyBcIkVudGVyXCIsIE1JRCQoIEhJU1RPX1BBR0UkKCBDVVJfSElTVE8gKSwgNywgTEVOKCBISVNUT19QQUdFJCggQ1VSX0hJU1RPICkgKSApLCBGYWxzZSBdXG5cdFx0RWxzZVxuXHRcdFx0UEFHRV9MT0FEWyBcIlwiLCBISVNUT19QQUdFJCggQ1VSX0hJU1RPICksIEZhbHNlIF1cblx0XHRFbmQgSWZcblx0RW5kIElmXG5FbmQgUHJvY2VkdXJlXG5cbi8vIFBhZ2Ugc3VpdmFudGVcblByb2NlZHVyZSBORVhUX1BBR0Vcblx0SWYgQ1VSX0hJU1RPIDwgMTAwMCBBbmQgSElTVE9fUEFHRSQoIENVUl9ISVNUTyArIDEgKSA8PiBcIlwiXG5cdFx0Q1VSX0hJU1RPID0gQ1VSX0hJU1RPICsgMVxuXHRcdElmIE1JRCQoIEhJU1RPX1BBR0UkKCBDVVJfSElTVE8gKSwgMCwgNyApID0gXCJTRUFSQ0g6XCJcblx0XHRcdC8vQ1VSX0hJU1RPID0gQ1VSX0hJU1RPIC0gMVxuXHRcdFx0S0VZX1NFQVJDSFsgXCJFbnRlclwiLCBNSUQkKCBISVNUT19QQUdFJCggQ1VSX0hJU1RPICksIDcsIExFTiggSElTVE9fUEFHRSQoIENVUl9ISVNUTyApICkgKSwgRmFsc2UgXVxuXHRcdEVsc2Vcblx0XHRcdFBBR0VfTE9BRFsgXCJcIiwgSElTVE9fUEFHRSQoIENVUl9ISVNUTyApLCBGYWxzZSBdXG5cdFx0RW5kIElmXG5cdEVuZCBJZlxuRW5kIFByb2NlZHVyZVxuXG5Qcm9jZWR1cmUgS0VZX1NFQVJDSFsgQ0tFWSQsIFZBTFVFJCwgSVNORVcgXVxuXHRJZiBDS0VZJCA9IFwiRW50ZXJcIlxuXHRcdElmIExvd2VyJChWQUxVRSQpID0gXCJsZW5kIG1lIHlvdXIgcGVuXCJcblx0XHRcdENIRUFUX0FDQ0VTUyA9IFRydWVcblx0XHRcdEpTIEV4ZWN1dGUgXCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ21kX2xvZ2luJyApLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1wiXG5cdFx0XHRKUyBFeGVjdXRlIFwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdtZF9nYXRvcicgKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1wiXG5cdFx0RWxzZVxuXHRcdFx0SWYgSVNORVdcblx0XHRcdFx0SWYgQ1VSX0hJU1RPIDwgMTAwMFxuXHRcdFx0XHRcdENVUl9ISVNUTyA9IENVUl9ISVNUTyArIDFcblx0XHRcdFx0XHRGb3IgUiA9IENVUl9ISVNUTyBUbyAxMDAwIDogSElTVE9fUEFHRSQoIFIgKSA9IFwiXCIgOiBOZXh0IFJcblx0XHRcdFx0RW5kIElmXG5cdFx0XHRFbmQgSWZcblx0XHRcdEhJU1RPX1BBR0UkKCBDVVJfSElTVE8gKSA9IFwiU0VBUkNIOlwiICsgVkFMVUUkXG5cdFx0XHRKUyBFeGVjdXRlIFwic2VhcmNoKCAnXCIgKyBWQUxVRSQgKyBcIicgKTtcIlxuXHRcdEVuZCBpZlxuXHRFbmQgSWZcbkVuZCBQcm9jZWR1cmVcblxuUHJvY2VkdXJlIFBBR0VfU0FWRVxuXHRTdGFja0VkaXQgU2F2ZSBDVVJSRU5UX1BBR0UkLCBDVVJSRU5UX0NPREUkLCBPblN1Y2Nlc3MkPVwiX09OX1BBR0VfU0FWRURcIlxuRW5kIFByb2NlZHVyZVxuXG5Qcm9jZWR1cmUgX09OX1BBR0VfU0FWRURbIE1FU1NBR0UkIF1cblx0SlMgRXhlY3V0ZSBcImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbWRfc3luYycgKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1wiXG5cdFRvYXN0IFwiUGFnZSBzYXZlZCFcIiwgVHlwZSQ9XCJzdWNjZXNzXCJcbkVuZCBQcm9jZWR1cmVcbiIsIm51bWJlciI6MywicGFyZW50Ijp7InBhdGgiOiJpbmNsdWRlcy9sYW5ndWFnZS90b2FzdC5hb3ppbmMiLCJzb3VyY2UiOiJJbnN0cnVjdGlvbiBUb2FzdCwgVGV4dCQsIFR5cGUkPVwicHJpbWFyeVwiLCBTaG93VG9wID0gRmFsc2UsIER1cmF0aW9uID0gMzAwMCwgQ2FsbEJhY2skPVwiXCJcbntcblx0I2Vycm9yc1xuXHRpZiggTWV0cm8gPT0gdW5kZWZpbmVkIClcblx0e1xuXHRcdHRocm93IFwibWV0cm9fdWlfbGliX25vdF9sb2FkZWRcIjtcblx0fVxuXG5cdHZhciBvcHRpb25zID1cblx0e1xuXHQgICAgY2FsbGJhY2s6IE1ldHJvLm5vb3AsXG5cdCAgICB0aW1lb3V0OiAlRHVyYXRpb24sXG5cdCAgICBkaXN0YW5jZTogMjAsXG5cdCAgICBzaG93VG9wOiAlU2hvd1RvcCxcblx0ICAgIGNsc1RvYXN0OiBcIlwiXG5cdH1cblxuXHRpZiggJUNhbGxCYWNrJCAhPSAnJyApXG5cdHtcbiBcdFx0b3B0aW9ucy5jYWxsYmFjayA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRhcHBsaWNhdGlvbi5hb3oucnVuUHJvY2VkdXJlKCAlQ2FsbEJhY2skLCB7fSApO1xuXHRcdH1cblx0fVxuXG5cdE1ldHJvLnRvYXN0LmNyZWF0ZSggJVRleHQkLCBudWxsLCBudWxsLCBudWxsLCBvcHRpb25zICk7XG59XG5FbmQgSW5zdHJ1Y3Rpb25cbiIsIm51bWJlciI6MiwicGFyZW50Ijp7InBhdGgiOiJpbmNsdWRlcy9sYW5ndWFnZS9tZC1yZWFkZXIuYW96aW5jIiwic291cmNlIjoiSW5zdHJ1Y3Rpb24gU3RhY2tFZGl0IE9wZW4sIFVSTCQsIE9uU3VjY2VzcyQ9XCJcIiwgT25FcnJvciQ9XCJcIlxue1xuXHQjZXJyb3JzXG5cdGlmKCBNRFBhcnNlciA9PSB1bmRlZmluZWQgKVxuXHR7XG5cdFx0dGhyb3cgXCJtZF9wYXJzZXJfanNfbm90X2xvYWRlZFwiO1xuXHR9XG5cblx0aWYoICVVUkwkID09IHVuZGVmaW5lZCB8fCAlVVJMJCA9PSAnJyApXG5cdHtcblx0XHR0aHJvdyBcIm1kX2xvYWRfdXJsX21pc3NlZFwiO1xuXHR9XG5cblx0TURQYXJzZXIub3BlbiggJVVSTCQsICVPblN1Y2Nlc3MkLCAlT25FcnJvciQgKTtcbn1cbkVuZCBJbnN0cnVjdGlvblxuXG5cbkluc3RydWN0aW9uIFN0YWNrRWRpdCBTaG93LCBDT0RFJCwgSFRNTF9JRCRcbntcblx0I2Vycm9yc1xuXHRpZiggTURQYXJzZXIgPT0gdW5kZWZpbmVkIClcblx0e1xuXHRcdHRocm93IFwibWRfcGFyc2VyX2pzX25vdF9sb2FkZWRcIjtcblx0fVxuXG5cdGlmKCAlQ09ERSQgPT0gdW5kZWZpbmVkIHx8ICVDT0RFJCA9PSAnJyApXG5cdHtcblx0XHR0aHJvdyBcIm5vX21hcmtkb3duX2NvZGVfdG9fcGFyc2VcIjtcblx0fVxuXG5cdGlmKCBTdGFja2VkaXQgPT0gdW5kZWZpbmVkIClcblx0e1xuXHRcdHRocm93IFwic3RhY2tlZGl0X2xpYl9ub3RfbG9hZGVkXCI7XG5cdH1cblxuXHRNRFBhcnNlci5zaG93KCAlQ09ERSQsICVIVE1MX0lEJCApO1xufVxuRW5kIEluc3RydWN0aW9uXG5cbkluc3RydWN0aW9uIFN0YWNrRWRpdCBFZGl0LCBDT0RFJCwgT25DaGFuZ2UkID0gXCJcIiwgT25DbG9zZSQgPSBcIlwiXG57XG5cdCNlcnJvcnNcblx0aWYoIE1EUGFyc2VyID09IHVuZGVmaW5lZCApXG5cdHtcblx0XHR0aHJvdyBcIm1kX3BhcnNlcl9qc19ub3RfbG9hZGVkXCI7XG5cdH1cblxuXHRpZiggJUNPREUkID09IHVuZGVmaW5lZCB8fCAlQ09ERSQgPT0gJycgKVxuXHR7XG5cdFx0dGhyb3cgXCJub19tYXJrZG93bl9jb2RlX3RvX3BhcnNlXCI7XG5cdH1cblxuXHRpZiggU3RhY2tlZGl0ID09IHVuZGVmaW5lZCApXG5cdHtcblx0XHR0aHJvdyBcInN0YWNrZWRpdF9saWJfbm90X2xvYWRlZFwiO1xuXHR9XG5cblx0TURQYXJzZXIuZWRpdCggJUNPREUkLCAlT25DaGFuZ2UkLCAlT25DbG9zZSQgKTtcbn1cbkVuZCBJbnN0cnVjdGlvblxuXG5JbnN0cnVjdGlvbiBTdGFja0VkaXQgU2F2ZSwgUGFnZSQsIENvZGUkLCBPblN1Y2Nlc3MkPVwiXCIsIE9uRXJyb3IkPVwiXCJcbntcblx0I2Vycm9yc1xuXHRNRFBhcnNlci5zYXZlKCAlUGFnZSQsICVDb2RlJCwgJU9uU3VjY2VzcyQsICVPbkVycm9yJCApO1xufVxuRW5kIEluc3RydWN0aW9uXG4iLCJudW1iZXIiOjEsInBhcmVudCI6eyJwYXRoIjoiL2hvbWUvYmFwdGlzdGUvYW96L2Fvei1kb2NzL3NvdXJjZXMvQU9aIERvY3MvQU9aIERvY3MuYW96Iiwic291cmNlIjoiTG9hZCBBc3NldCBcImh0dHBzOi8vY2RuLm1ldHJvdWkub3JnLnVhL3Y0L2Nzcy9tZXRyby1hbGwubWluLmNzc1wiLCBcIm1ldHJvLWNzc1wiXG5Mb2FkIEFzc2V0IFwiaHR0cHM6Ly9jZG4ubWV0cm91aS5vcmcudWEvdjQvanMvbWV0cm8ubWluLmpzXCIsIFwibWV0cm8tanNcIlxuTG9hZCBBc3NldCBcInd3dy9zdHlsZXMvcHJpc20uY3NzXCIsIFwicHJpc20tY3NzXCJcbkxvYWQgQXNzZXQgXCJodHRwczovL3N0YWNrZWRpdC5pby9zdHlsZS5jc3NcIiwgXCJzdGFja2VkaXQtY3NzXCJcbkxvYWQgQXNzZXQgXCJodHRwczovL3VucGtnLmNvbS9zdGFja2VkaXQtanNAMS4wLjcvZG9jcy9saWIvc3RhY2tlZGl0Lm1pbi5qc1wiLCBcInN0YWNrZWRpdC1qc1wiXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2xpYnMvc3RyaW5nLXV0aWxzLmpzXCIsIFwic3RyaW5nX3V0aWxzXCJcbkxvYWQgQXNzZXQgXCJ3d3cvanMvbGlicy9tZC1wYXJzZXIuanNcIiwgXCJtZC1wYXJzZXJcIlxuTG9hZCBBc3NldCBcInd3dy9qcy9saWJzL3ByaXNtLmpzXCIsIFwicHJpc20tanNcIlxuTG9hZCBBc3NldCBcInd3dy9qcy9saWJzL2xhbmd1YWdlcy9hb3oubWluLmpzXCIsIFwiYW96XCJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL2ZvbnRzL2ZvbnQuY3NzXCIsIFwiZm9udC1jc3NcIlxuTG9hZCBBc3NldCBcInd3dy9zdHlsZXMvZm9udHMvZHlzbGV4aWEvc3R5bGVzaGVldC5jc3NcIiwgXCJkeXMtY3NzXCJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL2dsb2JhbC5jc3NcIiwgXCJnbG9iYWwtY3NzXCJcblxuTG9hZCBBc3NldCBcInd3dy9odG1sL2luZGV4Lmh0bWxcIiwgXCJpbmRleFwiXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2luZGV4LmpzXCIsIFwiaW5kZXgtanNcIlxuXG5JbmNsdWRlIFwiaW5jbHVkZXMvbGFuZ3VhZ2UvbWQtcmVhZGVyLmFvemluY1wiXG5JbmNsdWRlIFwiaW5jbHVkZXMvbGFuZ3VhZ2UvdG9hc3QuYW96aW5jXCJcbkluY2x1ZGUgXCJpbmNsdWRlcy9hcHAuYW96aW5jXCJcblxuTE9DQUwgPSBGYWxzZSA6IFBSRVAgPSBGYWxzZSA6IExPQ0FMX1dITyQgPSBcIkJCXCIgOiBVUkxfU0VBUkNIJCA9IFwiXCJcblxuR2xvYmFsIExPQ0FMLCBQUkVQLCBMT0NBTF9XSE8kLCBVUkxfU0VBUkNIJFxuV2FpdCAyIDogTUFJTiA6IFdhaXRcblxuY2xhcGZpblxuIiwibnVtYmVyIjowLCJwYXJlbnQiOm51bGwsIm9mZnNldExpbmVzIjowfSwib2Zmc2V0TGluZXMiOjE2fSwib2Zmc2V0TGluZXMiOjg2fSwib2Zmc2V0TGluZXMiOjExNn1d')),
		localTags: JSON.parse(atob('e30=')),
		globalTags: JSON.parse(atob('e30=')),
		developerMode: false,
		gotoDirectMode: false,
		useSounds: false,
		loadFilesAfter: JSON.parse(atob('W10='))
	};
	this.aoz=new AOZ(canvasId,options, 'iAjOkZ');
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
	this.vars.CHEAT_ACCESS=0;
	this.vars.LOCAL=0;
	this.vars.PREP=0;
	this.vars.LOCAL_WHO$="";
	this.vars.URL_SEARCH$="";
	this.infoGlobals=
	{	
		lang$:this.aoz.varPtr('{"variable":{"name":"LANG$","token":"lang$","tokenCode":"LANG$","codeInit":"","nameReal":"LANG$","nameRealLower":"lang$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":13,"classDefinition":null},"parameters":""}'),
		current_page$:this.aoz.varPtr('{"variable":{"name":"CURRENT_PAGE$","token":"current_page$","tokenCode":"CURRENT_PAGE$","codeInit":"","nameReal":"CURRENT_PAGE$","nameRealLower":"current_page$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":14,"classDefinition":null},"parameters":""}'),
		current_code$:this.aoz.varPtr('{"variable":{"name":"CURRENT_CODE$","token":"current_code$","tokenCode":"CURRENT_CODE$","codeInit":"","nameReal":"CURRENT_CODE$","nameRealLower":"current_code$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":15,"classDefinition":null},"parameters":""}'),
		root_url$:this.aoz.varPtr('{"variable":{"name":"ROOT_URL$","token":"root_url$","tokenCode":"ROOT_URL$","codeInit":"","nameReal":"ROOT_URL$","nameRealLower":"root_url$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":16,"classDefinition":null},"parameters":""}'),
		cur_id$:this.aoz.varPtr('{"variable":{"name":"CUR_ID$","token":"cur_id$","tokenCode":"CUR_ID$","codeInit":"","nameReal":"CUR_ID$","nameRealLower":"cur_id$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":17,"classDefinition":null},"parameters":""}'),
		cur_type$:this.aoz.varPtr('{"variable":{"name":"CUR_TYPE$","token":"cur_type$","tokenCode":"CUR_TYPE$","codeInit":"","nameReal":"CUR_TYPE$","nameRealLower":"cur_type$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":18,"classDefinition":null},"parameters":""}'),
		histo_page$_array:this.aoz.varPtr('{"variable":{"name":"HISTO_PAGE$","token":"histo_page$_array","tokenCode":"HISTO_PAGE$_array","codeInit":"","nameReal":"HISTO_PAGE$","nameRealLower":"histo_page$","type":"string","numberType":"2","isArray":true,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":1,"defined":true,"nonDimensionned":false,"index":19,"code":"vars.HISTO_PAGE$_array","classDefinition":null},"code":"vars.HISTO_PAGE$_array","parameters":""}'),
		cur_histo:this.aoz.varPtr('{"variable":{"name":"CUR_HISTO","token":"cur_histo","tokenCode":"CUR_HISTO","codeInit":"","nameReal":"CUR_HISTO","nameRealLower":"cur_histo","type":"integer","numberType":"0","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":20,"classDefinition":null},"parameters":""}'),
		cheat_access:this.aoz.varPtr('{"variable":{"name":"CHEAT_ACCESS","token":"cheat_access","tokenCode":"CHEAT_ACCESS","codeInit":"","nameReal":"CHEAT_ACCESS","nameRealLower":"cheat_access","type":"integer","numberType":"0","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":21,"classDefinition":null},"parameters":""}'),
		local:this.aoz.varPtr('{"variable":{"name":"LOCAL","token":"local","tokenCode":"LOCAL","codeInit":"","nameReal":"LOCAL","nameRealLower":"local","type":"integer","numberType":"0","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":22,"classDefinition":null},"parameters":""}'),
		prep:this.aoz.varPtr('{"variable":{"name":"PREP","token":"prep","tokenCode":"PREP","codeInit":"","nameReal":"PREP","nameRealLower":"prep","type":"integer","numberType":"0","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":23,"classDefinition":null},"parameters":""}'),
		local_who$:this.aoz.varPtr('{"variable":{"name":"LOCAL_WHO$","token":"local_who$","tokenCode":"LOCAL_WHO$","codeInit":"","nameReal":"LOCAL_WHO$","nameRealLower":"local_who$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":24,"classDefinition":null},"parameters":""}'),
		url_search$:this.aoz.varPtr('{"variable":{"name":"URL_SEARCH$","token":"url_search$","tokenCode":"URL_SEARCH$","codeInit":"","nameReal":"URL_SEARCH$","nameRealLower":"url_search$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":25,"classDefinition":null},"parameters":""}'),
	};
	this.blocks=[];
	this.blocks[0]=function(aoz,vars)
	{
		// From source: /home/baptiste/aoz/aoz-docs/sources/AOZ Docs/AOZ Docs.aoz
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
		vars.CURRENT_PAGE$="user_guide/table_of_contents/000_chapter.txt";
		aoz.sourcePos="3:0:80";
		vars.CURRENT_CODE$="";
		// ROOT_URL$ = "https://doc.aoz.studio/" : CUR_ID$ = "" : CUR_TYPE$ = ""
		aoz.sourcePos="3:1:0";
		vars.ROOT_URL$="https://doc.aoz.studio/";
		aoz.sourcePos="3:1:40";
		vars.CUR_ID$="";
		aoz.sourcePos="3:1:55";
		vars.CUR_TYPE$="";
		// Dim HISTO_PAGE$( 1000 ) : CUR_HISTO = 1 : CHEAT_ACCESS = False
		vars.HISTO_PAGE$_array.dim([1000],0);
		aoz.sourcePos="3:3:26";
		vars.CUR_HISTO=1;
		aoz.sourcePos="3:3:42";
		vars.CHEAT_ACCESS=false;
		aoz.sourcePos="0:18:0";
		
		// From source: /home/baptiste/aoz/aoz-docs/sources/AOZ Docs/AOZ Docs.aoz
		aoz.sourcePos="0:20:0";
		vars.LOCAL=false;
		aoz.sourcePos="0:20:16";
		vars.PREP=false;
		aoz.sourcePos="0:20:31";
		vars.LOCAL_WHO$="BB";
		aoz.sourcePos="0:20:51";
		vars.URL_SEARCH$="";
		// Wait 2 : MAIN : Wait
		aoz.sourcePos="0:23:0";
		return{type:12,waitThis:aoz,callFunction:"wait",waitFunction:"wait_wait",args:[2]};
	};
	this.blocks[15]=function(aoz,vars)
	{
		aoz.sourcePos="0:23:9";
		return{type:4,procedure:"main",args:{}};
	};
	this.blocks[16]=function(aoz,vars)
	{
		aoz.sourcePos="0:23:16";
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
			if(!((this.root.vars.PREP)==(this.aoz.platformTrue)))
				return{type:1,label:2};
		};
		this.blocks[1]=function(aoz,vars)
		{
			// ROOT_URL$ = "https://doc.aoz.studio/next/"
			aoz.sourcePos="3:9:8";
			this.root.vars.ROOT_URL$="https://doc.aoz.studio/next/";
			// End If
			aoz.sourcePos="3:10:4";
		};
		this.blocks[2]=function(aoz,vars)
		{
			// If LOCAL = True
			aoz.sourcePos="3:11:4";
			if(!((this.root.vars.LOCAL)==(this.aoz.platformTrue)))
				return{type:1,label:7};
		};
		this.blocks[3]=function(aoz,vars)
		{
			// If LOCAL_WHO$ = "BP"
			aoz.sourcePos="3:12:8";
			if(!((this.root.vars.LOCAL_WHO$)==("BP")))
				return{type:1,label:5};
		};
		this.blocks[4]=function(aoz,vars)
		{
			// ROOT_URL$ = "http://localhost/aoz/aoz-docs/"
			aoz.sourcePos="3:13:12";
			this.root.vars.ROOT_URL$="http://localhost/aoz/aoz-docs/";
			// Else
			return{type:1,label:6};
		};
		this.blocks[5]=function(aoz,vars)
		{
			// ROOT_URL$ = "http://localhost/aozdoc/"
			aoz.sourcePos="3:15:12";
			this.root.vars.ROOT_URL$="http://localhost/aozdoc/";
			// End If
			aoz.sourcePos="3:16:8";
		};
		this.blocks[6]=function(aoz,vars)
		{
			// End If
			aoz.sourcePos="3:17:4";
		};
		this.blocks[7]=function(aoz,vars)
		{
			// Show HTML "index"
			aoz.sourcePos="3:18:4";
			Show_HTML( "index", false, "" );
			// JS Execute "initPanels();"
			aoz.sourcePos="3:19:4";
			JS_Execute( "initPanels();" );
			// RELOAD_LANG
			aoz.sourcePos="3:20:4";
			return{type:4,procedure:"reload_lang",args:{}};
		};
		this.blocks[8]=function(aoz,vars)
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
			// StackEdit Open URL$ = ROOT_URL$ + "/php/index.php?page=topics.txt", OnSuccess$="_ON_TOPICS_LOADED"
			aoz.sourcePos="3:25:4";
			if( MDParser == undefined )
			{
				throw "md_parser_js_not_loaded";
			}
			if( this.root.vars.ROOT_URL$+"/php/index.php?page=topics.txt" == undefined || this.root.vars.ROOT_URL$+"/php/index.php?page=topics.txt" == '' )
			{
				throw "md_load_url_missed";
			}
			MDParser.open( this.root.vars.ROOT_URL$+"/php/index.php?page=topics.txt", "_ON_TOPICS_LOADED", "" );
			// If URL_SEARCH$ <> ""
			aoz.sourcePos="3:26:4";
			if(!((this.root.vars.URL_SEARCH$)!=("")))
				return{type:1,label:3};
		};
		this.blocks[1]=function(aoz,vars)
		{
			// KEY_SEARCH[ "Enter", URL_SEARCH$, True ]
			aoz.sourcePos="3:27:8";
			return{type:4,procedure:"key_search",args:{CKEY$:"Enter",VALUE$:this.root.vars.URL_SEARCH$,ISNEW:this.aoz.platformTrue}};
		};
		this.blocks[2]=function(aoz,vars)
		{
			// URL_SEARCH$ = ""
			aoz.sourcePos="3:28:8";
			this.root.vars.URL_SEARCH$="";
			// Else
			return{type:1,label:5};
		};
		this.blocks[3]=function(aoz,vars)
		{
			// PAGE_LOAD[ "", CURRENT_PAGE$, False ]
			aoz.sourcePos="3:30:8";
			return{type:4,procedure:"page_load",args:{ID$:"",URL$:this.root.vars.CURRENT_PAGE$,IS_NEW:false}};
		};
		this.blocks[4]=function(aoz,vars)
		{
			// End if
			aoz.sourcePos="3:31:4";
		};
		this.blocks[5]=function(aoz,vars)
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
			// CURRENT_PAGE$ = "user_guide/table_of_contents/000_chapter.txt"
			aoz.sourcePos="3:35:4";
			this.root.vars.CURRENT_PAGE$="user_guide/table_of_contents/000_chapter.txt";
			// PAGE_LOAD[ "", CURRENT_PAGE$, True ]
			aoz.sourcePos="3:36:4";
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
			aoz.sourcePos="3:41:4";
			this.root.vars.CURRENT_PAGE$=vars.URL$;
			// If IS_NEW = True
			aoz.sourcePos="3:42:4";
			if(!((vars.IS_NEW)==(this.aoz.platformTrue)))
				return{type:1,label:4};
		};
		this.blocks[1]=function(aoz,vars)
		{
			// CUR_HISTO = CUR_HISTO + 1
			aoz.sourcePos="3:43:8";
			this.root.vars.CUR_HISTO=aoz.fp2Int(this.root.vars.CUR_HISTO+1);
			// For R = CUR_HISTO To 1000 : HISTO_PAGE$( R ) = "" : Next R
			aoz.sourcePos="3:44:8";
			vars.R=aoz.fp2Int(this.root.vars.CUR_HISTO);
		};
		this.blocks[2]=function(aoz,vars)
		{
			aoz.sourcePos="3:44:36";
			this.root.vars.HISTO_PAGE$_array.setValue([vars.R],"")
			aoz.sourcePos="3:44:60";
			vars.R+=1;
			if(vars.R<=1000)
				return{type:1,label:2};
		};
		this.blocks[3]=function(aoz,vars)
		{
			// End If
			aoz.sourcePos="3:45:4";
		};
		this.blocks[4]=function(aoz,vars)
		{
			// HISTO_PAGE$( CUR_HISTO ) = URL$
			aoz.sourcePos="3:47:4";
			this.root.vars.HISTO_PAGE$_array.setValue([this.root.vars.CUR_HISTO],vars.URL$)
			// If ID$ <> ""
			aoz.sourcePos="3:48:4";
			if(!((vars.ID$)!=("")))
				return{type:1,label:8};
		};
		this.blocks[5]=function(aoz,vars)
		{
			// If CUR_ID$ <> "" And CUR_ID$ <> ID$
			aoz.sourcePos="3:49:8";
			if(!(((this.root.vars.CUR_ID$)!=(""))&&((this.root.vars.CUR_ID$)!=(vars.ID$))))
				return{type:1,label:7};
		};
		this.blocks[6]=function(aoz,vars)
		{
			// HTML Element CUR_ID$, ClassName$ = CUR_TYPE$
			aoz.sourcePos="3:50:12";
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
			aoz.sourcePos="3:51:8";
		};
		this.blocks[7]=function(aoz,vars)
		{
			// CUR_ID$ = ID$ : CUR_TYPE$ = HTML Element Attribute$( ID$, "class" )
			aoz.sourcePos="3:52:8";
			this.root.vars.CUR_ID$=vars.ID$;
			aoz.sourcePos="3:52:24";
			this.root.vars.CUR_TYPE$=HTML_Element_Attribute( vars.ID$, "class", 'string' ) ;
			// HTML Element CUR_ID$, ClassName$ = CUR_TYPE$ + " select-topic"
			aoz.sourcePos="3:53:8";
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
			aoz.sourcePos="3:54:4";
		};
		this.blocks[8]=function(aoz,vars)
		{
			// StackEdit Open URL$ = ROOT_URL$ + "/php/index.php?page=" + URL$, OnSuccess$="_ON_PAGE_LOADED"
			aoz.sourcePos="3:55:4";
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
	this.p_login=function(aoz,parent,args)
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
			// JS Execute "document.getElementById( 'log_pwd' ).value = '';"
			aoz.sourcePos="3:59:4";
			JS_Execute( "document.getElementById( 'log_pwd' ).value = '';" );
			// JS Execute "document.getElementById( 'frm_login' ).style.display = 'block';"
			aoz.sourcePos="3:60:4";
			JS_Execute( "document.getElementById( 'frm_login' ).style.display = 'block';" );
			// End Procedure
			return{type:0};
		};
	};
	this.p_key_login=function(aoz,parent,args)
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
		for ( v in args )
		{
			if ( typeof args[ v ] != "undefined" ) 
				this.vars[ v ] = args[v];
		}
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// If CKEY$ = "Enter" And VALUE$ = "abracadabra"
			aoz.sourcePos="3:65:4";
			if(!(((vars.CKEY$)==("Enter"))&&((vars.VALUE$)==("abracadabra"))))
				return{type:1,label:3};
		};
		this.blocks[1]=function(aoz,vars)
		{
			// JS Execute "document.getElementById( 'md_login' ).style.display = 'none';"
			aoz.sourcePos="3:66:8";
			JS_Execute( "document.getElementById( 'md_login' ).style.display = 'none';" );
			// JS Execute "document.getElementById( 'md_gator' ).style.display = 'block';"
			aoz.sourcePos="3:67:8";
			JS_Execute( "document.getElementById( 'md_gator' ).style.display = 'block';" );
			// JS Execute "document.getElementById( 'frm_login' ).style.display = 'none';"
			aoz.sourcePos="3:68:8";
			JS_Execute( "document.getElementById( 'frm_login' ).style.display = 'none';" );
			// JS Execute "document.getElementById( 'md_edit' ).style.display = 'block';"
			aoz.sourcePos="3:69:8";
			JS_Execute( "document.getElementById( 'md_edit' ).style.display = 'block';" );
			// LANG$ = "en" : RELOAD_LANG
			aoz.sourcePos="3:70:8";
			this.root.vars.LANG$="en";
			aoz.sourcePos="3:70:23";
			return{type:4,procedure:"reload_lang",args:{}};
		};
		this.blocks[2]=function(aoz,vars)
		{
			// End If
			aoz.sourcePos="3:71:4";
		};
		this.blocks[3]=function(aoz,vars)
		{
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
			// StackEdit Edit CODE$ = CURRENT_CODE$, OnChange$ = "_CHANGE_EDIT", OnClose$ = "_CLOSE_EDIT"
			aoz.sourcePos="3:75:4";
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
			MDParser.edit( this.root.vars.CURRENT_CODE$, "_CHANGE_EDIT", "_CLOSE_EDIT" );
			// End Procedure
			return{type:0};
		};
	};
	this.p__change_edit=function(aoz,parent,args)
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
			// If CODE$ <> CURRENT_CODE$
			aoz.sourcePos="3:79:4";
			if(!((vars.CODE$)!=(this.root.vars.CURRENT_CODE$)))
				return{type:1,label:2};
		};
		this.blocks[1]=function(aoz,vars)
		{
			// CURRENT_CODE$ = CODE$
			aoz.sourcePos="3:80:8";
			this.root.vars.CURRENT_CODE$=vars.CODE$;
			// JS Execute "document.getElementById( 'md_sync' ).style.display = 'block';"
			aoz.sourcePos="3:81:8";
			JS_Execute( "document.getElementById( 'md_sync' ).style.display = 'block';" );
			// End If
			aoz.sourcePos="3:82:4";
		};
		this.blocks[2]=function(aoz,vars)
		{
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
			aoz.sourcePos="3:86:4";
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
			aoz.sourcePos="3:91:4";
			vars.CODE$=aoz.utilities.replaceStringInText(vars.CODE$,"procedure:PAGE_LOAD(","javascript:application.aoz.runProcedure( 'PAGE_LOAD',") ;
			// CODE$ = Replace$(CODE$, "md/documentation/", "" )
			aoz.sourcePos="3:92:4";
			vars.CODE$=aoz.utilities.replaceStringInText(vars.CODE$,"md/documentation/","") ;
			// HTML Element "topics", Content$=CODE$
			aoz.sourcePos="3:93:4";
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
			aoz.sourcePos="3:98:4";
			this.root.vars.CURRENT_CODE$=vars.CODE$;
			// StackEdit Show CODE$, "page"
			aoz.sourcePos="3:99:4";
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
			aoz.sourcePos="3:104:4";
			if(!((this.root.vars.CUR_HISTO)>(1)))
				return{type:1,label:7};
		};
		this.blocks[1]=function(aoz,vars)
		{
			// CUR_HISTO = CUR_HISTO - 1
			aoz.sourcePos="3:105:8";
			this.root.vars.CUR_HISTO=aoz.fp2Int(this.root.vars.CUR_HISTO-1);
			// If MID$( HISTO_PAGE$( CUR_HISTO ), 0, 7 ) = "SEARCH:"
			aoz.sourcePos="3:106:8";
			if(!((this.aoz.getMid$(this.root.vars.HISTO_PAGE$_array.getValue([this.root.vars.CUR_HISTO]),0,7))==("SEARCH:")))
				return{type:1,label:4};
		};
		this.blocks[2]=function(aoz,vars)
		{
			// KEY_SEARCH[ "Enter", MID$( HISTO_PAGE$( CUR_HISTO ), 7, LEN( HISTO_PAGE$( CUR_HISTO ) ) ), False ]
			aoz.sourcePos="3:108:12";
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
			aoz.sourcePos="3:110:12";
			return{type:4,procedure:"page_load",args:{ID$:"",URL$:this.root.vars.HISTO_PAGE$_array.getValue([this.root.vars.CUR_HISTO]),IS_NEW:false}};
		};
		this.blocks[5]=function(aoz,vars)
		{
			// End If
			aoz.sourcePos="3:111:8";
		};
		this.blocks[6]=function(aoz,vars)
		{
			// End If
			aoz.sourcePos="3:112:4";
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
			aoz.sourcePos="3:117:4";
			if(!(((this.root.vars.CUR_HISTO)<(1000))&&((this.root.vars.HISTO_PAGE$_array.getValue([this.root.vars.CUR_HISTO+1]))!=(""))))
				return{type:1,label:7};
		};
		this.blocks[1]=function(aoz,vars)
		{
			// CUR_HISTO = CUR_HISTO + 1
			aoz.sourcePos="3:118:8";
			this.root.vars.CUR_HISTO=aoz.fp2Int(this.root.vars.CUR_HISTO+1);
			// If MID$( HISTO_PAGE$( CUR_HISTO ), 0, 7 ) = "SEARCH:"
			aoz.sourcePos="3:119:8";
			if(!((this.aoz.getMid$(this.root.vars.HISTO_PAGE$_array.getValue([this.root.vars.CUR_HISTO]),0,7))==("SEARCH:")))
				return{type:1,label:4};
		};
		this.blocks[2]=function(aoz,vars)
		{
			// KEY_SEARCH[ "Enter", MID$( HISTO_PAGE$( CUR_HISTO ), 7, LEN( HISTO_PAGE$( CUR_HISTO ) ) ), False ]
			aoz.sourcePos="3:121:12";
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
			aoz.sourcePos="3:123:12";
			return{type:4,procedure:"page_load",args:{ID$:"",URL$:this.root.vars.HISTO_PAGE$_array.getValue([this.root.vars.CUR_HISTO]),IS_NEW:false}};
		};
		this.blocks[5]=function(aoz,vars)
		{
			// End If
			aoz.sourcePos="3:124:8";
		};
		this.blocks[6]=function(aoz,vars)
		{
			// End If
			aoz.sourcePos="3:125:4";
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
			aoz.sourcePos="3:129:4";
			if(!((vars.CKEY$)==("Enter")))
				return{type:1,label:11};
		};
		this.blocks[1]=function(aoz,vars)
		{
			// If Lower$(VALUE$) = "lend me your pen"
			aoz.sourcePos="3:130:8";
			if(!((vars.VALUE$.toLowerCase())==("lend me your pen")))
				return{type:1,label:3};
		};
		this.blocks[2]=function(aoz,vars)
		{
			// CHEAT_ACCESS = True
			aoz.sourcePos="3:131:12";
			this.root.vars.CHEAT_ACCESS=this.aoz.platformTrue;
			// JS Execute "document.getElementById( 'md_login' ).style.display = 'block';"
			aoz.sourcePos="3:132:12";
			JS_Execute( "document.getElementById( 'md_login' ).style.display = 'block';" );
			// JS Execute "document.getElementById( 'md_gator' ).style.display = 'none';"
			aoz.sourcePos="3:133:12";
			JS_Execute( "document.getElementById( 'md_gator' ).style.display = 'none';" );
			// Else
			return{type:1,label:10};
		};
		this.blocks[3]=function(aoz,vars)
		{
			// If ISNEW
			aoz.sourcePos="3:135:12";
			if(!(vars.ISNEW))
				return{type:1,label:9};
		};
		this.blocks[4]=function(aoz,vars)
		{
			// If CUR_HISTO < 1000
			aoz.sourcePos="3:136:16";
			if(!((this.root.vars.CUR_HISTO)<(1000)))
				return{type:1,label:8};
		};
		this.blocks[5]=function(aoz,vars)
		{
			// CUR_HISTO = CUR_HISTO + 1
			aoz.sourcePos="3:137:20";
			this.root.vars.CUR_HISTO=aoz.fp2Int(this.root.vars.CUR_HISTO+1);
			// For R = CUR_HISTO To 1000 : HISTO_PAGE$( R ) = "" : Next R
			aoz.sourcePos="3:138:20";
			vars.R=aoz.fp2Int(this.root.vars.CUR_HISTO);
		};
		this.blocks[6]=function(aoz,vars)
		{
			aoz.sourcePos="3:138:48";
			this.root.vars.HISTO_PAGE$_array.setValue([vars.R],"")
			aoz.sourcePos="3:138:72";
			vars.R+=1;
			if(vars.R<=1000)
				return{type:1,label:6};
		};
		this.blocks[7]=function(aoz,vars)
		{
			// End If
			aoz.sourcePos="3:139:16";
		};
		this.blocks[8]=function(aoz,vars)
		{
			// End If
			aoz.sourcePos="3:140:12";
		};
		this.blocks[9]=function(aoz,vars)
		{
			// HISTO_PAGE$( CUR_HISTO ) = "SEARCH:" + VALUE$
			aoz.sourcePos="3:141:12";
			this.root.vars.HISTO_PAGE$_array.setValue([this.root.vars.CUR_HISTO],"SEARCH:"+vars.VALUE$)
			// JS Execute "search( '" + VALUE$ + "' );"
			aoz.sourcePos="3:142:12";
			JS_Execute( "search( '"+vars.VALUE$+"' );" );
			// End if
			aoz.sourcePos="3:143:8";
		};
		this.blocks[10]=function(aoz,vars)
		{
			// End If
			aoz.sourcePos="3:144:4";
		};
		this.blocks[11]=function(aoz,vars)
		{
			// End Procedure
			return{type:0};
		};
	};
	this.p_page_save=function(aoz,parent,args)
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
			// StackEdit Save CURRENT_PAGE$, CURRENT_CODE$, OnSuccess$="_ON_PAGE_SAVED"
			aoz.sourcePos="3:148:4";
			MDParser.save( this.root.vars.CURRENT_PAGE$, this.root.vars.CURRENT_CODE$, "_ON_PAGE_SAVED", "" );
			// End Procedure
			return{type:0};
		};
	};
	this.p__on_page_saved=function(aoz,parent,args)
	{
		this.aoz=aoz;
		this.root=parent.root;
		this.className="procedure";
		this.parent=parent;
		this.vars={};
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.vars.MESSAGE$="";
		for ( v in args )
		{
			if ( typeof args[ v ] != "undefined" ) 
				this.vars[ v ] = args[v];
		}
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// JS Execute "document.getElementById( 'md_sync' ).style.display = 'none';"
			aoz.sourcePos="3:152:4";
			JS_Execute( "document.getElementById( 'md_sync' ).style.display = 'none';" );
			// Toast "Page saved!", Type$="success"
			aoz.sourcePos="3:153:4";
			if( Metro == undefined )
			{
				throw "metro_ui_lib_not_loaded";
			}
			var options =
			{
				callback: Metro.noop,
				timeout: 3000,
				distance: 20,
				showTop: false,
				clsToast: ""
			}
			if( "" != '' )
			{
				 options.callback = function()
				{
					application.aoz.runProcedure( "", {} );
				}
			}
			Metro.toast.create( "Page saved!", null, null, null, options );
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
};
