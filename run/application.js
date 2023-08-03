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
// Compiled with AOZ Transpiler Version 14.03 on the 10/07/2023-13:21:09
//
function Application( canvasId, args )
{
	this.root=this;
	this.parent=this;
	this.contextName='application';
	this.manifest=JSON.parse(atob('eyJ2ZXJzaW9uIjoiOSIsImluZm9zIjp7InR5cGUiOiJwYyIsImFwcGxpY2F0aW9uTmFtZSI6IkFPWiBEb2NzIiwiYXV0aG9yIjoiQmFwdGlzdGUgQmlkZWF1eCIsInZlcnNpb24iOiIxLjAuMCIsImRhdGUiOiIiLCJjb3B5cmlnaHQiOiJDb3B5cmlnaHQgKGMpIDIwMjIgQU9aIFN0dWRpbyIsInN0YXJ0IjoiQU9aIERvY3MuYW96IiwidGVtcGxhdGUiOiJ0ZW1wbGF0ZXMvdGVtcGxhdGVfY3Jvc3MifSwiY29tcGlsYXRpb24iOnsicGxhdGZvcm0iOiJhb3oiLCJrZXltYXAiOiJhb3oiLCJtYWNoaW5lIjoibW9kZXJuIiwic3BlZWQiOiJmYXN0Iiwic3ludGF4IjoiZW5oYW5jZWQiLCJlbmRpYW4iOiJsaXR0bGUiLCJub1dhcm5pbmciOltdLCJkaXNwbGF5RW5kQWxlcnQiOnRydWUsImRpc3BsYXlFcnJvckFsZXJ0Ijp0cnVlLCJ1c2VMb2NhbFRhYnMiOnRydWUsInVzZUFzc2V0c1Jlc291cmNlcyI6dHJ1ZSwiYWN0aW9ucyI6eyJhZnRlckNvbXBpbGF0aW9uIjp7IndpbjMyIjoic2hlbGw6QzoveGFtcHAvaHRkb2NzL2FvemRvYy9hb3ovcnVuLmJhdCJ9fSwiaW5jbHVkZVBhdGhzIjpbXX0sImRpc3BsYXkiOnsidHZTdGFuZGFyZCI6InBhbCIsInJlZnJlc2hSYXRlIjo2MCwicmVzb2x1dGlvbiI6IjE5MjB4MTA4MCIsIndpZHRoIjoxOTIwLCJoZWlnaHQiOjEwODAsImJhY2tncm91bmQiOiJjb2xvciIsImJhY2tncm91bmRDb2xvciI6IiMwMDAwMDAiLCJib2R5QmFja2dyb3VuZENvbG9yIjoiIzAwMDAwMCIsImJvZHlCYWNrZ3JvdW5kSW1hZ2UiOiIuL3J1bnRpbWUvcmVzb3VyY2VzL3N0YXJfbmlnaHQuanBlZyIsInNjYWxlWCI6MSwic2NhbGVZIjoxLCJzY3JlZW5TY2FsZSI6MSwiZnBzIjpmYWxzZSwiZnBzRm9udCI6IjEycHggVmVyZGFuYSIsImZwc0NvbG9yIjoiI0ZGRkYwMCIsImZwc1giOjEwLCJmcHNZIjoxNiwiZnVsbFBhZ2UiOnRydWUsImZ1bGxTY3JlZW4iOmZhbHNlLCJrZWVwUHJvcG9ydGlvbnMiOnRydWUsImZ1bGxTY3JlZW5JY29uIjpmYWxzZSwiZnVsbFNjcmVlbkljb25YIjotMzQsImZ1bGxTY3JlZW5JY29uWSI6MiwiZnVsbFNjcmVlbkljb25JbWFnZSI6Ii4vcnVudGltZS9yZXNvdXJjZXMvZnVsbF9zY3JlZW4ucG5nIiwic21hbGxTY3JlZW5JY29uSW1hZ2UiOiIuL3J1bnRpbWUvcmVzb3VyY2VzL3NtYWxsX3NjcmVlbi5wbmciLCJzbW9vdGhpbmciOnRydWUsIm9yaWVudGF0aW9uX2RldGVjdGlvbiI6ImxhbmRzY2FwZSIsInJlbmRlcmVyIjoiY2FudmFzIn0sImJvb3RTY3JlZW4iOnsiYWN0aXZlIjp0cnVlLCJ3YWl0U291bmRzIjowLCJjbGlja1NvdW5kcyI6ZmFsc2V9LCJjb2xsaXNpb25zIjp7Im1ldGhvZCI6ImZpbmUiLCJwcmVjaXNpb24iOjc1LCJhbHBoYVRocmVzaG9sZCI6MX0sInJhaW5ib3dzIjp7Im1vZGUiOiJzbG93In0sImZvbnRzIjp7Imxpc3RGb250cyI6IlBDIiwiYW1pZ2EiOltdLCJnb29nbGUiOltdfSwic291bmRzIjp7Im1vZGUiOiJQQyIsInZvbHVtZSI6MSwicHJlbG9hZCI6dHJ1ZSwibnVtYmVyT2ZTb3VuZHNUb1ByZWxvYWQiOjMyLCJzb3VuZFBvb2xTaXplIjozMn0sImdhbWVwYWQiOnsibWFwcGluZyI6eyJ1cCI6IkFycm93VXAiLCJkb3duIjoiQXJyb3dEb3duIiwibGVmdCI6IkFycm93TGVmdCIsInJpZ2h0IjoiQXJyb3dSaWdodCIsImZpcmUiOiJTcGFjZSJ9fSwiZmlsZVN5c3RlbSI6eyJjYXNlU2Vuc2l0aXZlIjpmYWxzZX0sImRlZmF1bHQiOnsic2NyZWVuIjp7IngiOjAsInkiOjAsIndpZHRoIjoxOTIwLCJoZWlnaHQiOjEwODAsIm51bWJlck9mQ29sb3JzIjo2NCwicGl4ZWxNb2RlIjoibG93cmVzIiwicGFsZXR0ZSI6WyIjMDAwMDAwIiwiI0ZGRkZGRiIsIiNEMUQxRDEiLCIjQTJBMkEyIiwiIzczNzM3MyIsIiM0NDQ0NDQiLCIjRkYwMDAwIiwiI0QxMDAwMCIsIiNBMjAwMDAiLCIjNzMwMDAwIiwiIzQ0MDAwMCIsIiMwMEZGMDAiLCIjMDBEMTAwIiwiIzAwQTIwMCIsIiMwMDczMDAiLCIjMDA0NDAwIiwiI0ZGRkYwMCIsIiNEMUQxMDAiLCIjQTJBMjAwIiwiIzczNzMwMCIsIiM0NDQ0MDAiLCIjRkY3RjAwIiwiI0UyNzEwMCIsIiNDNDYyMDAiLCIjQTY1MzAwIiwiIzg4NDQwMCIsIiMwMDAwRkYiLCIjMDAwMEQxIiwiIzAwMDBBMiIsIiMwMDAwNzMiLCIjMDAwMDQ0IiwiIzAwRkZGRiIsIiMwMEQxRDEiLCIjMDBBMkEyIiwiIzAwNzM3MyIsIiMwMDQ0NDQiLCIjRkYwMEZGIiwiI0QxMDBEMSIsIiNBMjAwQTIiLCIjNzMwMDczIiwiIzQ0MDA0NCIsIiNGRkExMDAiLCIjRkZCMzEyIiwiI0ZGQzYyNSIsIiNGRkQ4MzciLCIjRkZFQjRBIiwiI0ZGRkU1RCIsIiMwMDI5NjUiLCIjMTIzOTc1IiwiIzI0NDk4NSIsIiMzNjU5OTUiLCIjNDg2OUE1IiwiIzVBNzlCNSIsIiNCRjcxN0YiLCIjQjI2NzczIiwiI0E0NUQ2NiIsIiM5NzUzNTkiLCIjODk0OTRDIiwiIzdCM0YzRiIsIiM4MjUyQjQiLCIjNjIzRTg3IiwiIzQxMjk1QSIsIiMyMTE1MkQiLCIjMDAwMDAwIl0sIndpbmRvdyI6eyJ4IjowLCJ5IjowLCJ3aWR0aCI6ODAsImhlaWdodCI6MjUsImJvcmRlciI6MCwicGFwZXIiOjAsInBlbiI6MSwiYmFja2dyb3VuZCI6Im9wYXF1ZSIsImZvbnQiOnsibmFtZSI6IklCTSBQbGV4IE1vbm8iLCJ0eXBlIjoiZ29vZ2xlIiwiaGVpZ2h0IjoyNH0sImN1cnNvck9uIjp0cnVlLCJjdXJzb3JJbWFnZSI6Ii4vcnVudGltZS9yZXNvdXJjZXMvY3Vyc29yX3BjLnBuZyIsImN1cnNvckNvbG9ycyI6W3siciI6NjgsImciOjY4LCJiIjowLCJhIjoxMjh9LHsiciI6MTM2LCJnIjoxMzYsImIiOjAsImEiOjEyOH0seyJyIjoxODcsImciOjE4NywiYiI6MCwiYSI6MTI4fSx7InIiOjIyMSwiZyI6MjIxLCJiIjowLCJhIjoxMjh9LHsiciI6MjM4LCJnIjoyMzgsImIiOjAsImEiOjEyOH0seyJyIjoyNTUsImciOjI1NSwiYiI6MzQsImEiOjEyOH0seyJyIjoyNTUsImciOjI1NSwiYiI6MTM2LCJhIjoxMjh9LHsiciI6MjU1LCJnIjoyNTUsImIiOjIwNCwiYSI6MTI4fSx7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImEiOjEyOH0seyJyIjoxNzAsImciOjE3MCwiYiI6MjU1LCJhIjoxMjh9LHsiciI6MTM2LCJnIjoxMzYsImIiOjIwNCwiYSI6MTI4fSx7InIiOjEwMiwiZyI6MTAyLCJiIjoxNzAsImEiOjEyOH0seyJyIjozNCwiZyI6MzQsImIiOjEwMiwiYSI6MTI4fSx7InIiOjAsImciOjAsImIiOjY4LCJhIjoxMjh9LHsiciI6MCwiZyI6MCwiYiI6MTcsImEiOjEyOH0seyJyIjowLCJnIjowLCJiIjowLCJhIjoxMjh9XX19fX0='));
	var options =
	{
		manifest: this.manifest,
		sources: JSON.parse(atob('W3sicGF0aCI6IkM6L3hhbXBwL2h0ZG9jcy9hb3pkb2MvYW96L0FPWiBEb2NzL0FPWiBEb2NzLmFveiIsInNvdXJjZSI6IkxvYWQgQXNzZXQgXCJodHRwczovL2Nkbi5tZXRyb3VpLm9yZy51YS92NC9jc3MvbWV0cm8tYWxsLm1pbi5jc3NcIiwgXCJtZXRyby1jc3NcIlxyXG5Mb2FkIEFzc2V0IFwiaHR0cHM6Ly9jZG4ubWV0cm91aS5vcmcudWEvdjQvanMvbWV0cm8ubWluLmpzXCIsIFwibWV0cm8tanNcIlxyXG5XYWl0IDJcclxuXHJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL3ByaXNtLmNzc1wiLCBcInByaXNtLWNzc1wiXHJcbkxvYWQgQXNzZXQgXCJodHRwczovL3N0YWNrZWRpdC5pby9zdHlsZS5jc3NcIiwgXCJzdGFja2VkaXQtY3NzXCJcclxuTG9hZCBBc3NldCBcImh0dHBzOi8vdW5wa2cuY29tL3N0YWNrZWRpdC1qc0AxLjAuNy9kb2NzL2xpYi9zdGFja2VkaXQubWluLmpzXCIsIFwic3RhY2tlZGl0LWpzXCJcclxuTG9hZCBBc3NldCBcInd3dy9qcy9saWJzL3N0cmluZy11dGlscy5qc1wiLCBcInN0cmluZ191dGlsc1wiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvanMvbGlicy9tZC1wYXJzZXIuanNcIiwgXCJtZC1wYXJzZXJcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2xpYnMvcHJpc20uanNcIiwgXCJwcmlzbS1qc1wiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvanMvbGlicy9sYW5ndWFnZXMvYW96Lm1pbi5qc1wiLCBcImFvelwiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL2ZvbnRzL2ZvbnQuY3NzXCIsIFwiZm9udC1jc3NcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L3N0eWxlcy9mb250cy9keXNsZXhpYS9zdHlsZXNoZWV0LmNzc1wiLCBcImR5cy1jc3NcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L3N0eWxlcy9nbG9iYWwuY3NzXCIsIFwiZ2xvYmFsLWNzc1wiXHJcblxyXG5Mb2FkIEFzc2V0IFwid3d3L2h0bWwvaW5kZXguaHRtbFwiLCBcImluZGV4XCJcclxuTG9hZCBBc3NldCBcInd3dy9qcy9pbmRleC5qc1wiLCBcImluZGV4LWpzXCJcclxuTG9hZCBBc3NldCBcInd3dy9qcy9lZGl0LmpzXCIsIFwiZWRpdC1qc1wiXHJcblxyXG5JbmNsdWRlIFwiaW5jbHVkZXMvbGFuZ3VhZ2UvbWQtcmVhZGVyLmFvemluY1wiXHJcbkluY2x1ZGUgXCJpbmNsdWRlcy9sYW5ndWFnZS90b2FzdC5hb3ppbmNcIlxyXG5JbmNsdWRlIFwiaW5jbHVkZXMvYXBwLmFvemluY1wiXHJcblxyXG5DdXJzIE9mZlxyXG5XYWl0IDIgOiBNQUlOXHJcblxuY2xhcGZpblxuIiwibnVtYmVyIjowLCJwYXJlbnQiOm51bGwsIm9mZnNldExpbmVzIjowfSx7InBhdGgiOiJpbmNsdWRlcy9sYW5ndWFnZS9tZC1yZWFkZXIuYW96aW5jIiwic291cmNlIjoiSW5zdHJ1Y3Rpb24gU3RhY2tFZGl0IE9wZW4sIFVSTCQsIE9uU3VjY2VzcyQ9XCJcIiwgT25FcnJvciQ9XCJcIlxyXG57XHJcblx0I2Vycm9yc1xyXG5cdGlmKCBNRFBhcnNlciA9PSB1bmRlZmluZWQgKVxyXG5cdHtcclxuXHRcdHRocm93IFwibWRfcGFyc2VyX2pzX25vdF9sb2FkZWRcIjtcclxuXHR9XHJcblxyXG5cdGlmKCAlVVJMJCA9PSB1bmRlZmluZWQgfHwgJVVSTCQgPT0gJycgKVxyXG5cdHtcclxuXHRcdHRocm93IFwibWRfbG9hZF91cmxfbWlzc2VkXCI7XHJcblx0fVxyXG5cclxuXHRNRFBhcnNlci5vcGVuKCAlVVJMJCwgJU9uU3VjY2VzcyQsICVPbkVycm9yJCApO1xyXG59XHJcbkVuZCBJbnN0cnVjdGlvblxyXG5cclxuSW5zdHJ1Y3Rpb24gU3RhY2tFZGl0IFNob3csIENPREUkLCBIVE1MX0lEJFxyXG57XHJcblx0I2Vycm9yc1xyXG5cdGlmKCBNRFBhcnNlciA9PSB1bmRlZmluZWQgKVxyXG5cdHtcclxuXHRcdHRocm93IFwibWRfcGFyc2VyX2pzX25vdF9sb2FkZWRcIjtcclxuXHR9XHJcblxyXG5cdGlmKCAlQ09ERSQgPT0gdW5kZWZpbmVkIHx8ICVDT0RFJCA9PSAnJyApXHJcblx0e1xyXG5cdFx0dGhyb3cgXCJub19tYXJrZG93bl9jb2RlX3RvX3BhcnNlXCI7XHJcblx0fVxyXG5cclxuXHRpZiggU3RhY2tlZGl0ID09IHVuZGVmaW5lZCApXHJcblx0e1xyXG5cdFx0dGhyb3cgXCJzdGFja2VkaXRfbGliX25vdF9sb2FkZWRcIjtcclxuXHR9XHJcblxyXG5cdE1EUGFyc2VyLnNob3coICVDT0RFJCwgJUhUTUxfSUQkICk7XHJcbn1cclxuRW5kIEluc3RydWN0aW9uXHJcblxyXG5JbnN0cnVjdGlvbiBTdGFja0VkaXQgRWRpdCwgQ09ERSQsIE9uQ2hhbmdlJCA9IFwiXCIsIE9uQ2xvc2UkID0gXCJcIlxyXG57XHJcblx0I2Vycm9yc1xyXG5cdGlmKCBNRFBhcnNlciA9PSB1bmRlZmluZWQgKVxyXG5cdHtcclxuXHRcdHRocm93IFwibWRfcGFyc2VyX2pzX25vdF9sb2FkZWRcIjtcclxuXHR9XHJcblxyXG5cdGlmKCAlQ09ERSQgPT0gdW5kZWZpbmVkIHx8ICVDT0RFJCA9PSAnJyApXHJcblx0e1xyXG5cdFx0dGhyb3cgXCJub19tYXJrZG93bl9jb2RlX3RvX3BhcnNlXCI7XHJcblx0fVxyXG5cclxuXHRpZiggU3RhY2tlZGl0ID09IHVuZGVmaW5lZCApXHJcblx0e1xyXG5cdFx0dGhyb3cgXCJzdGFja2VkaXRfbGliX25vdF9sb2FkZWRcIjtcclxuXHR9XHJcblxyXG5cdE1EUGFyc2VyLmVkaXQoICVDT0RFJCwgJU9uQ2hhbmdlJCwgJU9uQ2xvc2UkICk7XHJcbn1cclxuRW5kIEluc3RydWN0aW9uXHJcblxyXG5JbnN0cnVjdGlvbiBTdGFja0VkaXQgU2F2ZSwgT25TdWNjZXNzJD1cIlwiLCBPbkVycm9yJD1cIlwiXHJcbntcclxuXHQjZXJyb3JzXHJcblx0TURQYXJzZXIuc2F2ZSggJU9uU3VjY2VzcyQsICVPbkVycm9yJCApO1xyXG59XHJcbkVuZCBJbnN0cnVjdGlvblxyXG4iLCJudW1iZXIiOjEsInBhcmVudCI6eyJwYXRoIjoiQzoveGFtcHAvaHRkb2NzL2FvemRvYy9hb3ovQU9aIERvY3MvQU9aIERvY3MuYW96Iiwic291cmNlIjoiTG9hZCBBc3NldCBcImh0dHBzOi8vY2RuLm1ldHJvdWkub3JnLnVhL3Y0L2Nzcy9tZXRyby1hbGwubWluLmNzc1wiLCBcIm1ldHJvLWNzc1wiXHJcbkxvYWQgQXNzZXQgXCJodHRwczovL2Nkbi5tZXRyb3VpLm9yZy51YS92NC9qcy9tZXRyby5taW4uanNcIiwgXCJtZXRyby1qc1wiXHJcbldhaXQgMlxyXG5cclxuTG9hZCBBc3NldCBcInd3dy9zdHlsZXMvcHJpc20uY3NzXCIsIFwicHJpc20tY3NzXCJcclxuTG9hZCBBc3NldCBcImh0dHBzOi8vc3RhY2tlZGl0LmlvL3N0eWxlLmNzc1wiLCBcInN0YWNrZWRpdC1jc3NcIlxyXG5Mb2FkIEFzc2V0IFwiaHR0cHM6Ly91bnBrZy5jb20vc3RhY2tlZGl0LWpzQDEuMC43L2RvY3MvbGliL3N0YWNrZWRpdC5taW4uanNcIiwgXCJzdGFja2VkaXQtanNcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2xpYnMvc3RyaW5nLXV0aWxzLmpzXCIsIFwic3RyaW5nX3V0aWxzXCJcclxuTG9hZCBBc3NldCBcInd3dy9qcy9saWJzL21kLXBhcnNlci5qc1wiLCBcIm1kLXBhcnNlclwiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvanMvbGlicy9wcmlzbS5qc1wiLCBcInByaXNtLWpzXCJcclxuTG9hZCBBc3NldCBcInd3dy9qcy9saWJzL2xhbmd1YWdlcy9hb3oubWluLmpzXCIsIFwiYW96XCJcclxuTG9hZCBBc3NldCBcInd3dy9zdHlsZXMvZm9udHMvZm9udC5jc3NcIiwgXCJmb250LWNzc1wiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL2ZvbnRzL2R5c2xleGlhL3N0eWxlc2hlZXQuY3NzXCIsIFwiZHlzLWNzc1wiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL2dsb2JhbC5jc3NcIiwgXCJnbG9iYWwtY3NzXCJcclxuXHJcbkxvYWQgQXNzZXQgXCJ3d3cvaHRtbC9pbmRleC5odG1sXCIsIFwiaW5kZXhcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2luZGV4LmpzXCIsIFwiaW5kZXgtanNcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2VkaXQuanNcIiwgXCJlZGl0LWpzXCJcclxuXHJcbkluY2x1ZGUgXCJpbmNsdWRlcy9sYW5ndWFnZS9tZC1yZWFkZXIuYW96aW5jXCJcclxuSW5jbHVkZSBcImluY2x1ZGVzL2xhbmd1YWdlL3RvYXN0LmFvemluY1wiXHJcbkluY2x1ZGUgXCJpbmNsdWRlcy9hcHAuYW96aW5jXCJcclxuXHJcbkN1cnMgT2ZmXHJcbldhaXQgMiA6IE1BSU5cclxuXG5jbGFwZmluXG4iLCJudW1iZXIiOjAsInBhcmVudCI6bnVsbCwib2Zmc2V0TGluZXMiOjB9LCJvZmZzZXRMaW5lcyI6MTl9LHsicGF0aCI6ImluY2x1ZGVzL2xhbmd1YWdlL3RvYXN0LmFvemluYyIsInNvdXJjZSI6Ikluc3RydWN0aW9uIFRvYXN0LCBUZXh0JCwgVHlwZSQ9XCJwcmltYXJ5XCIsIFNob3dUb3AgPSBGYWxzZSwgRHVyYXRpb24gPSAzMDAwLCBDYWxsQmFjayQ9XCJcIlxyXG57XHJcblx0I2Vycm9yc1xyXG5cdGlmKCBNZXRybyA9PSB1bmRlZmluZWQgKVxyXG5cdHtcclxuXHRcdHRocm93IFwibWV0cm9fdWlfbGliX25vdF9sb2FkZWRcIjtcclxuXHR9XHJcblxyXG5cdHZhciBvcHRpb25zID1cclxuXHR7XHJcblx0ICAgIGNhbGxiYWNrOiBNZXRyby5ub29wLFxyXG5cdCAgICB0aW1lb3V0OiAlRHVyYXRpb24sXHJcblx0ICAgIGRpc3RhbmNlOiAyMCxcclxuXHQgICAgc2hvd1RvcDogJVNob3dUb3AsXHJcblx0ICAgIGNsc1RvYXN0OiBcIlwiXHJcblx0fVxyXG5cclxuXHRpZiggJUNhbGxCYWNrJCAhPSAnJyApXHJcblx0e1xyXG4gXHRcdG9wdGlvbnMuY2FsbGJhY2sgPSBmdW5jdGlvbigpXHJcblx0XHR7XHJcblx0XHRcdGFwcGxpY2F0aW9uLmFvei5ydW5Qcm9jZWR1cmUoICVDYWxsQmFjayQsIHt9ICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRNZXRyby50b2FzdC5jcmVhdGUoICVUZXh0JCwgbnVsbCwgbnVsbCwgbnVsbCwgb3B0aW9ucyApO1xyXG59XHJcbkVuZCBJbnN0cnVjdGlvblxyXG4iLCJudW1iZXIiOjIsInBhcmVudCI6eyJwYXRoIjoiaW5jbHVkZXMvbGFuZ3VhZ2UvbWQtcmVhZGVyLmFvemluYyIsInNvdXJjZSI6Ikluc3RydWN0aW9uIFN0YWNrRWRpdCBPcGVuLCBVUkwkLCBPblN1Y2Nlc3MkPVwiXCIsIE9uRXJyb3IkPVwiXCJcclxue1xyXG5cdCNlcnJvcnNcclxuXHRpZiggTURQYXJzZXIgPT0gdW5kZWZpbmVkIClcclxuXHR7XHJcblx0XHR0aHJvdyBcIm1kX3BhcnNlcl9qc19ub3RfbG9hZGVkXCI7XHJcblx0fVxyXG5cclxuXHRpZiggJVVSTCQgPT0gdW5kZWZpbmVkIHx8ICVVUkwkID09ICcnIClcclxuXHR7XHJcblx0XHR0aHJvdyBcIm1kX2xvYWRfdXJsX21pc3NlZFwiO1xyXG5cdH1cclxuXHJcblx0TURQYXJzZXIub3BlbiggJVVSTCQsICVPblN1Y2Nlc3MkLCAlT25FcnJvciQgKTtcclxufVxyXG5FbmQgSW5zdHJ1Y3Rpb25cclxuXHJcbkluc3RydWN0aW9uIFN0YWNrRWRpdCBTaG93LCBDT0RFJCwgSFRNTF9JRCRcclxue1xyXG5cdCNlcnJvcnNcclxuXHRpZiggTURQYXJzZXIgPT0gdW5kZWZpbmVkIClcclxuXHR7XHJcblx0XHR0aHJvdyBcIm1kX3BhcnNlcl9qc19ub3RfbG9hZGVkXCI7XHJcblx0fVxyXG5cclxuXHRpZiggJUNPREUkID09IHVuZGVmaW5lZCB8fCAlQ09ERSQgPT0gJycgKVxyXG5cdHtcclxuXHRcdHRocm93IFwibm9fbWFya2Rvd25fY29kZV90b19wYXJzZVwiO1xyXG5cdH1cclxuXHJcblx0aWYoIFN0YWNrZWRpdCA9PSB1bmRlZmluZWQgKVxyXG5cdHtcclxuXHRcdHRocm93IFwic3RhY2tlZGl0X2xpYl9ub3RfbG9hZGVkXCI7XHJcblx0fVxyXG5cclxuXHRNRFBhcnNlci5zaG93KCAlQ09ERSQsICVIVE1MX0lEJCApO1xyXG59XHJcbkVuZCBJbnN0cnVjdGlvblxyXG5cclxuSW5zdHJ1Y3Rpb24gU3RhY2tFZGl0IEVkaXQsIENPREUkLCBPbkNoYW5nZSQgPSBcIlwiLCBPbkNsb3NlJCA9IFwiXCJcclxue1xyXG5cdCNlcnJvcnNcclxuXHRpZiggTURQYXJzZXIgPT0gdW5kZWZpbmVkIClcclxuXHR7XHJcblx0XHR0aHJvdyBcIm1kX3BhcnNlcl9qc19ub3RfbG9hZGVkXCI7XHJcblx0fVxyXG5cclxuXHRpZiggJUNPREUkID09IHVuZGVmaW5lZCB8fCAlQ09ERSQgPT0gJycgKVxyXG5cdHtcclxuXHRcdHRocm93IFwibm9fbWFya2Rvd25fY29kZV90b19wYXJzZVwiO1xyXG5cdH1cclxuXHJcblx0aWYoIFN0YWNrZWRpdCA9PSB1bmRlZmluZWQgKVxyXG5cdHtcclxuXHRcdHRocm93IFwic3RhY2tlZGl0X2xpYl9ub3RfbG9hZGVkXCI7XHJcblx0fVxyXG5cclxuXHRNRFBhcnNlci5lZGl0KCAlQ09ERSQsICVPbkNoYW5nZSQsICVPbkNsb3NlJCApO1xyXG59XHJcbkVuZCBJbnN0cnVjdGlvblxyXG5cclxuSW5zdHJ1Y3Rpb24gU3RhY2tFZGl0IFNhdmUsIE9uU3VjY2VzcyQ9XCJcIiwgT25FcnJvciQ9XCJcIlxyXG57XHJcblx0I2Vycm9yc1xyXG5cdE1EUGFyc2VyLnNhdmUoICVPblN1Y2Nlc3MkLCAlT25FcnJvciQgKTtcclxufVxyXG5FbmQgSW5zdHJ1Y3Rpb25cclxuIiwibnVtYmVyIjoxLCJwYXJlbnQiOnsicGF0aCI6IkM6L3hhbXBwL2h0ZG9jcy9hb3pkb2MvYW96L0FPWiBEb2NzL0FPWiBEb2NzLmFveiIsInNvdXJjZSI6IkxvYWQgQXNzZXQgXCJodHRwczovL2Nkbi5tZXRyb3VpLm9yZy51YS92NC9jc3MvbWV0cm8tYWxsLm1pbi5jc3NcIiwgXCJtZXRyby1jc3NcIlxyXG5Mb2FkIEFzc2V0IFwiaHR0cHM6Ly9jZG4ubWV0cm91aS5vcmcudWEvdjQvanMvbWV0cm8ubWluLmpzXCIsIFwibWV0cm8tanNcIlxyXG5XYWl0IDJcclxuXHJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL3ByaXNtLmNzc1wiLCBcInByaXNtLWNzc1wiXHJcbkxvYWQgQXNzZXQgXCJodHRwczovL3N0YWNrZWRpdC5pby9zdHlsZS5jc3NcIiwgXCJzdGFja2VkaXQtY3NzXCJcclxuTG9hZCBBc3NldCBcImh0dHBzOi8vdW5wa2cuY29tL3N0YWNrZWRpdC1qc0AxLjAuNy9kb2NzL2xpYi9zdGFja2VkaXQubWluLmpzXCIsIFwic3RhY2tlZGl0LWpzXCJcclxuTG9hZCBBc3NldCBcInd3dy9qcy9saWJzL3N0cmluZy11dGlscy5qc1wiLCBcInN0cmluZ191dGlsc1wiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvanMvbGlicy9tZC1wYXJzZXIuanNcIiwgXCJtZC1wYXJzZXJcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2xpYnMvcHJpc20uanNcIiwgXCJwcmlzbS1qc1wiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvanMvbGlicy9sYW5ndWFnZXMvYW96Lm1pbi5qc1wiLCBcImFvelwiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL2ZvbnRzL2ZvbnQuY3NzXCIsIFwiZm9udC1jc3NcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L3N0eWxlcy9mb250cy9keXNsZXhpYS9zdHlsZXNoZWV0LmNzc1wiLCBcImR5cy1jc3NcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L3N0eWxlcy9nbG9iYWwuY3NzXCIsIFwiZ2xvYmFsLWNzc1wiXHJcblxyXG5Mb2FkIEFzc2V0IFwid3d3L2h0bWwvaW5kZXguaHRtbFwiLCBcImluZGV4XCJcclxuTG9hZCBBc3NldCBcInd3dy9qcy9pbmRleC5qc1wiLCBcImluZGV4LWpzXCJcclxuTG9hZCBBc3NldCBcInd3dy9qcy9lZGl0LmpzXCIsIFwiZWRpdC1qc1wiXHJcblxyXG5JbmNsdWRlIFwiaW5jbHVkZXMvbGFuZ3VhZ2UvbWQtcmVhZGVyLmFvemluY1wiXHJcbkluY2x1ZGUgXCJpbmNsdWRlcy9sYW5ndWFnZS90b2FzdC5hb3ppbmNcIlxyXG5JbmNsdWRlIFwiaW5jbHVkZXMvYXBwLmFvemluY1wiXHJcblxyXG5DdXJzIE9mZlxyXG5XYWl0IDIgOiBNQUlOXHJcblxuY2xhcGZpblxuIiwibnVtYmVyIjowLCJwYXJlbnQiOm51bGwsIm9mZnNldExpbmVzIjowfSwib2Zmc2V0TGluZXMiOjE5fSwib2Zmc2V0TGluZXMiOjg4fSx7InBhdGgiOiJpbmNsdWRlcy9hcHAuYW96aW5jIiwic291cmNlIjoiTEFORyQgPSBcImVuXCIgOiBDVVJSRU5UX1BBR0UkID0gXCJ1c2VyX2d1aWRlL3RhYmxlX29mX2NvbnRlbnRzLzAwMF9jaGFwdGVyLmh0bWxcIlxyXG5ST09UX1VSTCQgPSBcImh0dHBzOi8vZG9jLmFvei5zdHVkaW9cIiA6IENVUl9JRCQgPSBcIlwiIDogQ1VSX1RZUEUkID0gXCJcIiA6IENVUlJFTlRfQ09ERSQgPSBcIlwiIDogQ1VSUkVOVF9NRCQgPSBcIi4vcmVwb3NpdG9yeS9tZC9kb2N1bWVudGF0aW9uL2RlZmF1bHQvdXNlcl9ndWlkZS90YWJsZV9vZl9jb250ZW50cy8wMDBfY2hhcHRlci5odG1sXCJcclxuTE9DQUwgPSBGYWxzZSA6IFVSTF9TRUFSQ0gkID0gXCJcIiA6IENIRUFUX0FDQ0VTUyA9IEZhbHNlIDogQ1VSUkVOVF9IVE1MX0NPREUkID0gXCJcIiA6IENVUlJFTlRfSFRNTCQgPSBcIi4vcHVibGljL2RlZmF1bHQvdXNlcl9ndWlkZS90YWJsZV9vZl9jb250ZW50cy8wMDBfY2hhcHRlci5odG1sXCIgOiBDSEFQX05BTUUkPSBcIlwiXHJcbkdsb2JhbCBMT0NBTCwgVVJMX1NFQVJDSCRcclxuR2xvYmFsIENVUl9JRCQsIENVUl9UWVBFJCwgUk9PVF9VUkwkLCBMQU5HJCwgQ0hBUF9OQU1FJCwgQ1VSUkVOVF9QQUdFJCwgQ1VSUkVOVF9IVE1MJCwgQ1VSUkVOVF9IVE1MX0NPREUkLCBDVVJSRU5UX01EJCwgQ1VSUkVOVF9NRF9DT0RFJCwgQ0hFQVRfQUNDRVNTXHJcblxyXG4vLyBQb2ludCBkZSBkIHBhcnQgZHUgcHJvZ3JhbW1lXHJcblByb2NlZHVyZSBNQUlOXHJcblx0SWYgTE9DQUwgPSBUcnVlIFRoZW4gUk9PVF9VUkwkID0gXCJodHRwOi8vbG9jYWxob3N0L2FvemRvY1wiXHJcblx0U2hvdyBIVE1MIFwiaW5kZXhcIlxyXG5cdEpTIEV4ZWN1dGUgXCJpbml0UGFuZWxzKCk7XCJcclxuXHRSRUxPQURfR1VJXHJcblx0RG9cclxuXHRcdFJlZnJlc2hcclxuXHRMb29wXHJcbkVuZCBQcm9jZWR1cmVcclxuXHJcblByb2NlZHVyZSBSRUxPQURfR1VJXHJcblx0SlMgRXhlY3V0ZSBcInVwZGF0ZVRvcGljcygpO1wiXHJcblx0R09fSE9NRVxyXG5FbmQgUHJvY2VkdXJlXHJcblxyXG5Qcm9jZWR1cmUgR09fSE9NRVxyXG5cdElmIFVSTF9TRUFSQ0gkIDw+IFwiXCJcclxuXHRcdEpTIEV4ZWN1dGUgXCJzZWFyY2goICdcIiArIFVSTF9TRUFSQ0gkICsgXCInLCBzZWFyY2hBbGwgKTtcIlxyXG5cdFx0VVJMX1NFQVJDSCQgPSBcIlwiXHJcblx0RWxzZVxyXG5cdFx0SlMgRXhlY3V0ZSBcImxvYWRXZWxjb21lKCk7XCJcclxuXHRFbmQgaWZcclxuRW5kIFByb2NlZHVyZVxyXG5cclxuUHJvY2VkdXJlIExPR0lOXHJcblx0SlMgRXhlY3V0ZSBcImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbG9nX3B3ZCcgKS52YWx1ZSA9ICcnO1wiXHJcblx0SlMgRXhlY3V0ZSBcImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnZnJtX2xvZ2luJyApLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1wiXHJcbkVuZCBQcm9jZWR1cmVcclxuXHJcblByb2NlZHVyZSBLRVlfTE9HSU5bIENLRVkkLCBWQUxVRSQgXVxyXG5cdElmIENLRVkkID0gXCJFbnRlclwiIEFuZCBWQUxVRSQgPSBcImFicmFjYWRhYnJhXCJcclxuXHRcdEpTIEV4ZWN1dGUgXCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ21kX2xvZ2luJyApLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XCJcclxuXHRcdEpTIEV4ZWN1dGUgXCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ21kX2dhdG9yJyApLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1wiXHJcblx0XHRKUyBFeGVjdXRlIFwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdtZF9uZXdfY2hhcHRlcicgKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcIlxyXG5cdFx0SlMgRXhlY3V0ZSBcImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbWRfbmV3X3BhZ2UnICkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XCJcclxuXHRcdEpTIEV4ZWN1dGUgXCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ21kX3JlbmFtZScgKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcIlxyXG5cdFx0SlMgRXhlY3V0ZSBcImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnZnJtX2xvZ2luJyApLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XCJcclxuXHRcdEpTIEV4ZWN1dGUgXCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ21kX2VkaXQnICkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XCJcclxuXHRcdEpTIEV4ZWN1dGUgXCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ21kX2RlbGV0ZScgKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcIlxyXG5cdFx0TEFORyQgPSBcImVuXCIgOiBSRUxPQURfR1VJXHJcblx0RW5kIElmXHJcbkVuZCBQcm9jZWR1cmVcclxuXHJcblByb2NlZHVyZSBMT0FEX0NPREVcclxuXHRTdGFja0VkaXQgT3BlbiBST09UX1VSTCQgKyBcIi9waHAvaW5kZXgucGhwP3BhZ2U9XCIgKyBDVVJSRU5UX01EJCwgT25TdWNjZXNzJCA9IFwiUEFHRV9FRElUXCJcclxuRW5kIFByb2NlZHVyZVxyXG5cclxuUHJvY2VkdXJlIFBBR0VfRURJVFsgQ09ERSQgXVxyXG5cdENVUlJFTlRfQ09ERSQgPSBDT0RFJFxyXG5cdFN0YWNrRWRpdCBFZGl0IENPREUkID0gQ1VSUkVOVF9DT0RFJCwgT25DaGFuZ2UkID0gXCJfQ0hBTkdFX0VESVRcIiwgT25DbG9zZSQgPSBcIl9DTE9TRV9FRElUXCJcclxuRW5kIFByb2NlZHVyZVxyXG5cclxuUHJvY2VkdXJlIF9DSEFOR0VfRURJVFsgQ09ERSQgXVxyXG5cdElmIENPREUkIDw+IENVUlJFTlRfQ09ERSRcclxuXHRcdENVUlJFTlRfQ09ERSQgPSBDT0RFJFxyXG5cdEVuZCBJZlxyXG5FbmQgUHJvY2VkdXJlXHJcblxyXG5Qcm9jZWR1cmUgX0NMT1NFX0VESVRbIENPREUkLCBIVE1MJCBdXHJcblx0UEFHRV9TQVZFXHJcblx0Ly9fT05fUEFHRV9MT0FERURbIENPREUkIF1cclxuRW5kIFByb2NcclxuXHJcbi8vIExlcyBydWJyaXF1ZXMgc29udCBjaGFyZyBlcyA/IEFsb3JzIG9uIGxlcyBhZmZpY2hlXHJcblByb2NlZHVyZSBfT05fVE9QSUNTX0xPQURFRFsgQ09ERSQgXVxyXG5cdENPREUkID0gUmVwbGFjZSQoQ09ERSQsIFwicHJvY2VkdXJlOlBBR0VfTE9BRChcIiwgXCJqYXZhc2NyaXB0OmFwcGxpY2F0aW9uLmFvei5ydW5Qcm9jZWR1cmUoICdQQUdFX0xPQUQnLFwiIClcclxuXHRDT0RFJCA9IFJlcGxhY2UkKENPREUkLCBcIm1kL2RvY3VtZW50YXRpb24vXCIsIFwiXCIgKVxyXG5cdEhUTUwgRWxlbWVudCBcInRvcGljc1wiLCBDb250ZW50JD1DT0RFJFxyXG5FbmQgUHJvY2VkdXJlXHJcblxyXG4vLyBMYSBwYWdlIGVzdCBjaGFyZyBlIC4gQWxvcnMgb24gbCdhZmZpY2hlXHJcblByb2NlZHVyZSBfT05fUEFHRV9MT0FERURbIENPREUkIF1cclxuXHRDVVJSRU5UX0NPREUkID0gQ09ERSRcclxuXHRTdGFja0VkaXQgU2hvdyBDT0RFJCwgXCJwYWdlXCJcclxuRW5kIFByb2NlZHVyZVxyXG5cclxuLy8gUGFnZSBwciBjIGRlbnRlXHJcblByb2NlZHVyZSBQUkVWSU9VU19QQUdFXHJcbkVuZCBQcm9jZWR1cmVcclxuXHJcbi8vIFBhZ2Ugc3VpdmFudGVcclxuUHJvY2VkdXJlIE5FWFRfUEFHRVxyXG5FbmQgUHJvY2VkdXJlXHJcblxyXG5Qcm9jZWR1cmUgS0VZX1NFQVJDSFsgQ0tFWSQsIFZBTFVFJCwgSVNORVcgXVxyXG5cdElmIENLRVkkID0gXCJFbnRlclwiXHJcblx0XHRJZiBMb3dlciQoVkFMVUUkKSA9IFwibGVuZCBtZSB5b3VyIHBlblwiXHJcblx0XHRcdENIRUFUX0FDQ0VTUyA9IFRydWVcclxuXHRcdFx0SlMgRXhlY3V0ZSBcImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbWRfbG9naW4nICkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XCJcclxuXHRcdFx0SlMgRXhlY3V0ZSBcImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbWRfZ2F0b3InICkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcIlxyXG5cdFx0RWxzZVxyXG5cdFx0XHRKUyBFeGVjdXRlIFwic2VhcmNoKCAnXCIgKyBWQUxVRSQgKyBcIicsIHRydWUgKTtcIlxyXG5cdFx0RW5kIGlmXHJcblx0RW5kIElmXHJcbkVuZCBQcm9jZWR1cmVcclxuXHJcblByb2NlZHVyZSBQQUdFX1NBVkVcclxuXHRTdGFja0VkaXQgU2F2ZSBPblN1Y2Nlc3MkPVwiX09OX1BBR0VfU0FWRURcIlxyXG5FbmQgUHJvY2VkdXJlXHJcblxyXG5Qcm9jZWR1cmUgX09OX1BBR0VfU0FWRURbIE1FU1NBR0UkIF1cclxuXHRUb2FzdCBcIlBhZ2Ugc2F2ZWQhXCIsIFR5cGUkPVwic3VjY2Vzc1wiXHJcblx0SlMgRXhlY3V0ZSBcIndpbmRvdy5vcGVuKCAnXCIgKyBNRVNTQUdFJCArIFwiJywgJ3BhZ2VfZnJhbWUnICk7XCJcclxuXHRKUyBFeGVjdXRlIFwid2luZG93Lm9wZW4oIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAncGFnZV9mcmFtZScgKS5jb250ZW50V2luZG93LmxvY2F0aW9uLmhyZWYsICdwYWdlX2ZyYW1lJyApO1wiXHJcblx0SlMgRXhlY3V0ZSBcImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbWRfZWRpdCcgKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcIlxyXG5cdEpTIEV4ZWN1dGUgXCJ3aW5kb3cub3BlbiggJ1wiICsgUk9PVF9VUkwkICsgXCIvdG9waWNzLnBocCcsICdwYWdlX3RvcGljcycgKTtcIlxyXG5cclxuRW5kIFByb2NlZHVyZVxyXG4iLCJudW1iZXIiOjMsInBhcmVudCI6eyJwYXRoIjoiaW5jbHVkZXMvbGFuZ3VhZ2UvdG9hc3QuYW96aW5jIiwic291cmNlIjoiSW5zdHJ1Y3Rpb24gVG9hc3QsIFRleHQkLCBUeXBlJD1cInByaW1hcnlcIiwgU2hvd1RvcCA9IEZhbHNlLCBEdXJhdGlvbiA9IDMwMDAsIENhbGxCYWNrJD1cIlwiXHJcbntcclxuXHQjZXJyb3JzXHJcblx0aWYoIE1ldHJvID09IHVuZGVmaW5lZCApXHJcblx0e1xyXG5cdFx0dGhyb3cgXCJtZXRyb191aV9saWJfbm90X2xvYWRlZFwiO1xyXG5cdH1cclxuXHJcblx0dmFyIG9wdGlvbnMgPVxyXG5cdHtcclxuXHQgICAgY2FsbGJhY2s6IE1ldHJvLm5vb3AsXHJcblx0ICAgIHRpbWVvdXQ6ICVEdXJhdGlvbixcclxuXHQgICAgZGlzdGFuY2U6IDIwLFxyXG5cdCAgICBzaG93VG9wOiAlU2hvd1RvcCxcclxuXHQgICAgY2xzVG9hc3Q6IFwiXCJcclxuXHR9XHJcblxyXG5cdGlmKCAlQ2FsbEJhY2skICE9ICcnIClcclxuXHR7XHJcbiBcdFx0b3B0aW9ucy5jYWxsYmFjayA9IGZ1bmN0aW9uKClcclxuXHRcdHtcclxuXHRcdFx0YXBwbGljYXRpb24uYW96LnJ1blByb2NlZHVyZSggJUNhbGxCYWNrJCwge30gKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdE1ldHJvLnRvYXN0LmNyZWF0ZSggJVRleHQkLCBudWxsLCBudWxsLCBudWxsLCBvcHRpb25zICk7XHJcbn1cclxuRW5kIEluc3RydWN0aW9uXHJcbiIsIm51bWJlciI6MiwicGFyZW50Ijp7InBhdGgiOiJpbmNsdWRlcy9sYW5ndWFnZS9tZC1yZWFkZXIuYW96aW5jIiwic291cmNlIjoiSW5zdHJ1Y3Rpb24gU3RhY2tFZGl0IE9wZW4sIFVSTCQsIE9uU3VjY2VzcyQ9XCJcIiwgT25FcnJvciQ9XCJcIlxyXG57XHJcblx0I2Vycm9yc1xyXG5cdGlmKCBNRFBhcnNlciA9PSB1bmRlZmluZWQgKVxyXG5cdHtcclxuXHRcdHRocm93IFwibWRfcGFyc2VyX2pzX25vdF9sb2FkZWRcIjtcclxuXHR9XHJcblxyXG5cdGlmKCAlVVJMJCA9PSB1bmRlZmluZWQgfHwgJVVSTCQgPT0gJycgKVxyXG5cdHtcclxuXHRcdHRocm93IFwibWRfbG9hZF91cmxfbWlzc2VkXCI7XHJcblx0fVxyXG5cclxuXHRNRFBhcnNlci5vcGVuKCAlVVJMJCwgJU9uU3VjY2VzcyQsICVPbkVycm9yJCApO1xyXG59XHJcbkVuZCBJbnN0cnVjdGlvblxyXG5cclxuSW5zdHJ1Y3Rpb24gU3RhY2tFZGl0IFNob3csIENPREUkLCBIVE1MX0lEJFxyXG57XHJcblx0I2Vycm9yc1xyXG5cdGlmKCBNRFBhcnNlciA9PSB1bmRlZmluZWQgKVxyXG5cdHtcclxuXHRcdHRocm93IFwibWRfcGFyc2VyX2pzX25vdF9sb2FkZWRcIjtcclxuXHR9XHJcblxyXG5cdGlmKCAlQ09ERSQgPT0gdW5kZWZpbmVkIHx8ICVDT0RFJCA9PSAnJyApXHJcblx0e1xyXG5cdFx0dGhyb3cgXCJub19tYXJrZG93bl9jb2RlX3RvX3BhcnNlXCI7XHJcblx0fVxyXG5cclxuXHRpZiggU3RhY2tlZGl0ID09IHVuZGVmaW5lZCApXHJcblx0e1xyXG5cdFx0dGhyb3cgXCJzdGFja2VkaXRfbGliX25vdF9sb2FkZWRcIjtcclxuXHR9XHJcblxyXG5cdE1EUGFyc2VyLnNob3coICVDT0RFJCwgJUhUTUxfSUQkICk7XHJcbn1cclxuRW5kIEluc3RydWN0aW9uXHJcblxyXG5JbnN0cnVjdGlvbiBTdGFja0VkaXQgRWRpdCwgQ09ERSQsIE9uQ2hhbmdlJCA9IFwiXCIsIE9uQ2xvc2UkID0gXCJcIlxyXG57XHJcblx0I2Vycm9yc1xyXG5cdGlmKCBNRFBhcnNlciA9PSB1bmRlZmluZWQgKVxyXG5cdHtcclxuXHRcdHRocm93IFwibWRfcGFyc2VyX2pzX25vdF9sb2FkZWRcIjtcclxuXHR9XHJcblxyXG5cdGlmKCAlQ09ERSQgPT0gdW5kZWZpbmVkIHx8ICVDT0RFJCA9PSAnJyApXHJcblx0e1xyXG5cdFx0dGhyb3cgXCJub19tYXJrZG93bl9jb2RlX3RvX3BhcnNlXCI7XHJcblx0fVxyXG5cclxuXHRpZiggU3RhY2tlZGl0ID09IHVuZGVmaW5lZCApXHJcblx0e1xyXG5cdFx0dGhyb3cgXCJzdGFja2VkaXRfbGliX25vdF9sb2FkZWRcIjtcclxuXHR9XHJcblxyXG5cdE1EUGFyc2VyLmVkaXQoICVDT0RFJCwgJU9uQ2hhbmdlJCwgJU9uQ2xvc2UkICk7XHJcbn1cclxuRW5kIEluc3RydWN0aW9uXHJcblxyXG5JbnN0cnVjdGlvbiBTdGFja0VkaXQgU2F2ZSwgT25TdWNjZXNzJD1cIlwiLCBPbkVycm9yJD1cIlwiXHJcbntcclxuXHQjZXJyb3JzXHJcblx0TURQYXJzZXIuc2F2ZSggJU9uU3VjY2VzcyQsICVPbkVycm9yJCApO1xyXG59XHJcbkVuZCBJbnN0cnVjdGlvblxyXG4iLCJudW1iZXIiOjEsInBhcmVudCI6eyJwYXRoIjoiQzoveGFtcHAvaHRkb2NzL2FvemRvYy9hb3ovQU9aIERvY3MvQU9aIERvY3MuYW96Iiwic291cmNlIjoiTG9hZCBBc3NldCBcImh0dHBzOi8vY2RuLm1ldHJvdWkub3JnLnVhL3Y0L2Nzcy9tZXRyby1hbGwubWluLmNzc1wiLCBcIm1ldHJvLWNzc1wiXHJcbkxvYWQgQXNzZXQgXCJodHRwczovL2Nkbi5tZXRyb3VpLm9yZy51YS92NC9qcy9tZXRyby5taW4uanNcIiwgXCJtZXRyby1qc1wiXHJcbldhaXQgMlxyXG5cclxuTG9hZCBBc3NldCBcInd3dy9zdHlsZXMvcHJpc20uY3NzXCIsIFwicHJpc20tY3NzXCJcclxuTG9hZCBBc3NldCBcImh0dHBzOi8vc3RhY2tlZGl0LmlvL3N0eWxlLmNzc1wiLCBcInN0YWNrZWRpdC1jc3NcIlxyXG5Mb2FkIEFzc2V0IFwiaHR0cHM6Ly91bnBrZy5jb20vc3RhY2tlZGl0LWpzQDEuMC43L2RvY3MvbGliL3N0YWNrZWRpdC5taW4uanNcIiwgXCJzdGFja2VkaXQtanNcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2xpYnMvc3RyaW5nLXV0aWxzLmpzXCIsIFwic3RyaW5nX3V0aWxzXCJcclxuTG9hZCBBc3NldCBcInd3dy9qcy9saWJzL21kLXBhcnNlci5qc1wiLCBcIm1kLXBhcnNlclwiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvanMvbGlicy9wcmlzbS5qc1wiLCBcInByaXNtLWpzXCJcclxuTG9hZCBBc3NldCBcInd3dy9qcy9saWJzL2xhbmd1YWdlcy9hb3oubWluLmpzXCIsIFwiYW96XCJcclxuTG9hZCBBc3NldCBcInd3dy9zdHlsZXMvZm9udHMvZm9udC5jc3NcIiwgXCJmb250LWNzc1wiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL2ZvbnRzL2R5c2xleGlhL3N0eWxlc2hlZXQuY3NzXCIsIFwiZHlzLWNzc1wiXHJcbkxvYWQgQXNzZXQgXCJ3d3cvc3R5bGVzL2dsb2JhbC5jc3NcIiwgXCJnbG9iYWwtY3NzXCJcclxuXHJcbkxvYWQgQXNzZXQgXCJ3d3cvaHRtbC9pbmRleC5odG1sXCIsIFwiaW5kZXhcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2luZGV4LmpzXCIsIFwiaW5kZXgtanNcIlxyXG5Mb2FkIEFzc2V0IFwid3d3L2pzL2VkaXQuanNcIiwgXCJlZGl0LWpzXCJcclxuXHJcbkluY2x1ZGUgXCJpbmNsdWRlcy9sYW5ndWFnZS9tZC1yZWFkZXIuYW96aW5jXCJcclxuSW5jbHVkZSBcImluY2x1ZGVzL2xhbmd1YWdlL3RvYXN0LmFvemluY1wiXHJcbkluY2x1ZGUgXCJpbmNsdWRlcy9hcHAuYW96aW5jXCJcclxuXHJcbkN1cnMgT2ZmXHJcbldhaXQgMiA6IE1BSU5cclxuXG5jbGFwZmluXG4iLCJudW1iZXIiOjAsInBhcmVudCI6bnVsbCwib2Zmc2V0TGluZXMiOjB9LCJvZmZzZXRMaW5lcyI6MTl9LCJvZmZzZXRMaW5lcyI6ODh9LCJvZmZzZXRMaW5lcyI6MTE4fV0=')),
		localTags: JSON.parse(atob('e30=')),
		globalTags: JSON.parse(atob('e30=')),
		developerMode: false,
		gotoDirectMode: false,
		useSounds: false,
		loadFilesAfter: JSON.parse(atob('W10=')),
		stringTable: JSON.parse(atob('eyIwMDAwMDAwLTEwZDBiMjQ2IjoiaW5jbHVkZXMvbGFuZ3VhZ2UvbWQtcmVhZGVyLmFvemluYyIsIjAwMDAwMDAtNTczMGIwZjQiOiJpbmNsdWRlcy9sYW5ndWFnZS90b2FzdC5hb3ppbmMiLCIwMDAwMDAwMDAwMDAwY2E5IjoiZW4iLCIwMDAwMDAwLTEzZTgxMzAwIjoidXNlcl9ndWlkZS90YWJsZV9vZl9jb250ZW50cy8wMDBfY2hhcHRlci5odG1sIiwiMDAwMDAwMC0zMDI1OTUwMyI6Imh0dHBzOi8vZG9jLmFvei5zdHVkaW8iLCIwMDAwMDAwMDAwMDAwMDAwIjoiIiwiMDAwMDAwMDAyZjBiYTY2OSI6Ii4vcmVwb3NpdG9yeS9tZC9kb2N1bWVudGF0aW9uL2RlZmF1bHQvdXNlcl9ndWlkZS90YWJsZV9vZl9jb250ZW50cy8wMDBfY2hhcHRlci5odG1sIiwiMDAwMDAwMDA1MjkzZThjZCI6Ii4vcHVibGljL2RlZmF1bHQvdXNlcl9ndWlkZS90YWJsZV9vZl9jb250ZW50cy8wMDBfY2hhcHRlci5odG1sIiwiMDAwMDAwMDA2YWIzYmE4MyI6ImluY2x1ZGVzL2FwcC5hb3ppbmMiLCIwMDAwMDAwMDMyMWUyM2JhIjoiaHR0cDovL2xvY2FsaG9zdC9hb3pkb2MiLCIwMDAwMDAwMDA0MDAxNmI4IjoiRW50ZXIiLCIwMDAwMDAwMDcxY2UzYWM2IjoiYWJyYWNhZGFicmEiLCIwMDAwMDAwMC1lMGU2ODdkIjoibGVuZCBtZSB5b3VyIHBlbiJ9')),
	};
	var aoz=new AOZ(canvasId,options, 'iAjOkZ');
	this.aoz=aoz;
	this.vars = ( typeof args == 'undefined' ? {} : args );
	this.procParam$='';
	this.procParam=0;
	this.objects={};

	// Compiled program begins here
	// ----------------------------
	this.vars.LANG$="";
	this.vars.CURRENT_PAGE$="";
	this.vars.ROOT_URL$="";
	this.vars.CUR_ID$="";
	this.vars.CUR_TYPE$="";
	this.vars.CURRENT_CODE$="";
	this.vars.CURRENT_MD$="";
	this.vars.LOCAL=0;
	this.vars.URL_SEARCH$="";
	this.vars.CHEAT_ACCESS=0;
	this.vars.CURRENT_HTML_CODE$="";
	this.vars.CURRENT_HTML$="";
	this.vars.CHAP_NAME$="";
	this.vars.CURRENT_MD_CODE$="";
	this.infoGlobals=
	{	
		lang$:this.aoz.varPtr('{"variable":{"name":"LANG$","token":"lang$","tokenCode":"LANG$","codeInit":"","nameReal":"LANG$","nameRealLower":"lang$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":27,"classDefinition":null},"parameters":"","isArray":false}'),
		current_page$:this.aoz.varPtr('{"variable":{"name":"CURRENT_PAGE$","token":"current_page$","tokenCode":"CURRENT_PAGE$","codeInit":"","nameReal":"CURRENT_PAGE$","nameRealLower":"current_page$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":28,"classDefinition":null},"parameters":"","isArray":false}'),
		root_url$:this.aoz.varPtr('{"variable":{"name":"ROOT_URL$","token":"root_url$","tokenCode":"ROOT_URL$","codeInit":"","nameReal":"ROOT_URL$","nameRealLower":"root_url$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":29,"classDefinition":null},"parameters":"","isArray":false}'),
		cur_id$:this.aoz.varPtr('{"variable":{"name":"CUR_ID$","token":"cur_id$","tokenCode":"CUR_ID$","codeInit":"","nameReal":"CUR_ID$","nameRealLower":"cur_id$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":30,"classDefinition":null},"parameters":"","isArray":false}'),
		cur_type$:this.aoz.varPtr('{"variable":{"name":"CUR_TYPE$","token":"cur_type$","tokenCode":"CUR_TYPE$","codeInit":"","nameReal":"CUR_TYPE$","nameRealLower":"cur_type$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":31,"classDefinition":null},"parameters":"","isArray":false}'),
		current_md$:this.aoz.varPtr('{"variable":{"name":"CURRENT_MD$","token":"current_md$","tokenCode":"CURRENT_MD$","codeInit":"","nameReal":"CURRENT_MD$","nameRealLower":"current_md$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":33,"classDefinition":null},"parameters":"","isArray":false}'),
		local:this.aoz.varPtr('{"variable":{"name":"LOCAL","token":"local","tokenCode":"LOCAL","codeInit":"","nameReal":"LOCAL","nameRealLower":"local","type":"integer","numberType":"0","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":34,"classDefinition":null},"parameters":"","isArray":false}'),
		url_search$:this.aoz.varPtr('{"variable":{"name":"URL_SEARCH$","token":"url_search$","tokenCode":"URL_SEARCH$","codeInit":"","nameReal":"URL_SEARCH$","nameRealLower":"url_search$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":35,"classDefinition":null},"parameters":"","isArray":false}'),
		cheat_access:this.aoz.varPtr('{"variable":{"name":"CHEAT_ACCESS","token":"cheat_access","tokenCode":"CHEAT_ACCESS","codeInit":"","nameReal":"CHEAT_ACCESS","nameRealLower":"cheat_access","type":"integer","numberType":"0","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":36,"classDefinition":null},"parameters":"","isArray":false}'),
		current_html_code$:this.aoz.varPtr('{"variable":{"name":"CURRENT_HTML_CODE$","token":"current_html_code$","tokenCode":"CURRENT_HTML_CODE$","codeInit":"","nameReal":"CURRENT_HTML_CODE$","nameRealLower":"current_html_code$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":37,"classDefinition":null},"parameters":"","isArray":false}'),
		current_html$:this.aoz.varPtr('{"variable":{"name":"CURRENT_HTML$","token":"current_html$","tokenCode":"CURRENT_HTML$","codeInit":"","nameReal":"CURRENT_HTML$","nameRealLower":"current_html$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":38,"classDefinition":null},"parameters":"","isArray":false}'),
		chap_name$:this.aoz.varPtr('{"variable":{"name":"CHAP_NAME$","token":"chap_name$","tokenCode":"CHAP_NAME$","codeInit":"","nameReal":"CHAP_NAME$","nameRealLower":"chap_name$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":true,"nonDimensionned":false,"index":39,"classDefinition":null},"parameters":"","isArray":false}'),
		current_md_code$:this.aoz.varPtr('{"variable":{"name":"CURRENT_MD_CODE$","token":"current_md_code$","tokenCode":"CURRENT_MD_CODE$","codeInit":"","nameReal":"CURRENT_MD_CODE$","nameRealLower":"current_md_code$","type":"string","numberType":"2","isArray":false,"isParameter":false,"global":true,"shared":false,"numberOfDimensions":0,"defined":false,"nonDimensionned":false,"index":40,"toSetDefault":true,"classDefinition":null},"parameters":"","isArray":false}'),
	};
	this.blocks=[];
	this.blocks[0]=function(aoz,vars)
	{
		// From source: C:/xampp/htdocs/aozdoc/aoz/AOZ Docs/AOZ Docs.aoz
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
		// Wait 2
		aoz.sourcePos="0:2:0";
		return{type:12,waitThis:aoz,callFunction:"wait",waitFunction:"wait_wait",args:[2]};
	};
	this.blocks[3]=function(aoz,vars)
	{
		// Load Asset "www/styles/prism.css", "prism-css"
		aoz.sourcePos="0:4:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/styles/prism.css","prism-css",false]};
	};
	this.blocks[4]=function(aoz,vars)
	{
		// Load Asset "https://stackedit.io/style.css", "stackedit-css"
		aoz.sourcePos="0:5:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["https://stackedit.io/style.css","stackedit-css",false]};
	};
	this.blocks[5]=function(aoz,vars)
	{
		// Load Asset "https://unpkg.com/stackedit-js@1.0.7/docs/lib/stackedit.min.js", "stackedit-js"
		aoz.sourcePos="0:6:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["https://unpkg.com/stackedit-js@1.0.7/docs/lib/stackedit.min.js","stackedit-js",false]};
	};
	this.blocks[6]=function(aoz,vars)
	{
		// Load Asset "www/js/libs/string-utils.js", "string_utils"
		aoz.sourcePos="0:7:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/js/libs/string-utils.js","string_utils",false]};
	};
	this.blocks[7]=function(aoz,vars)
	{
		// Load Asset "www/js/libs/md-parser.js", "md-parser"
		aoz.sourcePos="0:8:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/js/libs/md-parser.js","md-parser",false]};
	};
	this.blocks[8]=function(aoz,vars)
	{
		// Load Asset "www/js/libs/prism.js", "prism-js"
		aoz.sourcePos="0:9:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/js/libs/prism.js","prism-js",false]};
	};
	this.blocks[9]=function(aoz,vars)
	{
		// Load Asset "www/js/libs/languages/aoz.min.js", "aoz"
		aoz.sourcePos="0:10:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/js/libs/languages/aoz.min.js","aoz",false]};
	};
	this.blocks[10]=function(aoz,vars)
	{
		// Load Asset "www/styles/fonts/font.css", "font-css"
		aoz.sourcePos="0:11:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/styles/fonts/font.css","font-css",false]};
	};
	this.blocks[11]=function(aoz,vars)
	{
		// Load Asset "www/styles/fonts/dyslexia/stylesheet.css", "dys-css"
		aoz.sourcePos="0:12:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/styles/fonts/dyslexia/stylesheet.css","dys-css",false]};
	};
	this.blocks[12]=function(aoz,vars)
	{
		// Load Asset "www/styles/global.css", "global-css"
		aoz.sourcePos="0:13:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/styles/global.css","global-css",false]};
	};
	this.blocks[13]=function(aoz,vars)
	{
		// Load Asset "www/html/index.html", "index"
		aoz.sourcePos="0:15:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/html/index.html","index",false]};
	};
	this.blocks[14]=function(aoz,vars)
	{
		// Load Asset "www/js/index.js", "index-js"
		aoz.sourcePos="0:16:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/js/index.js","index-js",false]};
	};
	this.blocks[15]=function(aoz,vars)
	{
		// Load Asset "www/js/edit.js", "edit-js"
		aoz.sourcePos="0:17:0";
		return{type:12,waitThis:this.aoz.ASSET,callFunction:"loadAsset", waitFunction:"load_wait", args:["www/js/edit.js","edit-js",false]};
	};
	this.blocks[16]=function(aoz,vars)
	{
		aoz.sourcePos="0:19:0";
		aoz.sourcePos="0:20:0";
		
		// From source: includes/app.aozinc
		aoz.sourcePos="3:0:0";
		vars.LANG$=aoz.getString("0000000000000ca9");
		aoz.sourcePos="3:0:15";
		vars.CURRENT_PAGE$=aoz.getString("0000000-13e81300");
		// ROOT_URL$ = "https://doc.aoz.studio" : CUR_ID$ = "" : CUR_TYPE$ = "" : CURRENT_CODE$ = "" : CURRENT_MD$ = "./repository/md/documentation/default/user_guide/table_of_contents/000_chapter.html"
		aoz.sourcePos="3:1:0";
		vars.ROOT_URL$=aoz.getString("0000000-30259503");
		aoz.sourcePos="3:1:39";
		vars.CUR_ID$=aoz.getString("0000000000000000");
		aoz.sourcePos="3:1:54";
		vars.CUR_TYPE$=aoz.getString("0000000000000000");
		aoz.sourcePos="3:1:71";
		vars.CURRENT_CODE$=aoz.getString("0000000000000000");
		aoz.sourcePos="3:1:92";
		vars.CURRENT_MD$=aoz.getString("000000002f0ba669");
		// LOCAL = False : URL_SEARCH$ = "" : CHEAT_ACCESS = False : CURRENT_HTML_CODE$ = "" : CURRENT_HTML$ = "./public/default/user_guide/table_of_contents/000_chapter.html" : CHAP_NAME$= ""
		aoz.sourcePos="0:19:20";
		vars.LOCAL=false;
		aoz.sourcePos="0:19:36";
		vars.URL_SEARCH$=aoz.getString("0000000000000000");
		aoz.sourcePos="3:2:35";
		vars.CHEAT_ACCESS=false;
		aoz.sourcePos="3:2:58";
		vars.CURRENT_HTML_CODE$=aoz.getString("0000000000000000");
		aoz.sourcePos="3:2:84";
		vars.CURRENT_HTML$=aoz.getString("000000005293e8cd");
		aoz.sourcePos="3:2:167";
		vars.CHAP_NAME$=aoz.getString("0000000000000000");
		aoz.sourcePos="0:21:0";
		
		// From source: C:/xampp/htdocs/aozdoc/aoz/AOZ Docs/AOZ Docs.aoz
		aoz.sourcePos="0:23:0";
		aoz.currentScreen.currentTextWindow.setCursor(false);
		// Wait 2 : MAIN
		aoz.sourcePos="0:24:0";
		return{type:12,waitThis:aoz,callFunction:"wait",waitFunction:"wait_wait",args:[2]};
	};
	this.blocks[17]=function(aoz,vars)
	{
		aoz.sourcePos="0:24:9";
		return{type:4,procedure:"main",args:{}};
	};
	this.blocks[18]=function(aoz,vars)
	{
		return{type:0}
	};
	this.p_main=function(aoz,parent,args)
	{
		this.aoz=aoz;
		this.root=parent.root;
		this.className="procedure";
		this.parent=parent;
		this.vars=args;
		this.parent.procParam=0;
		this.parent.procParam$="";
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
			this.root.vars.ROOT_URL$=aoz.getString("00000000321e23ba");
		};
		this.blocks[2]=function(aoz,vars)
		{
			// Show HTML "index"
			aoz.sourcePos="3:9:4";
			Show_HTML( "index", this.aoz.platformTrue, "" );
			// JS Execute "initPanels();"
			aoz.sourcePos="3:10:4";
			JS_Execute( "initPanels();" );
			// RELOAD_GUI
			aoz.sourcePos="3:11:4";
			return{type:4,procedure:"reload_gui",args:{}};
		};
		this.blocks[3]=function(aoz,vars)
		{
			// Do
			aoz.sourcePos="3:12:4";
		};
		this.blocks[4]=function(aoz,vars)
		{
			// Refresh
			aoz.sourcePos="3:13:8";
			aoz.waitVblExit = true;
			return{type:12,waitThis:aoz,callFunction:"waitVbl",waitFunction:"waitVbl_wait",args:[]};
		};
		this.blocks[5]=function(aoz,vars)
		{
			// Loop
			aoz.sourcePos="3:14:4";
			return{type:1,label:4};
		};
		this.blocks[6]=function(aoz,vars)
		{
			// End Procedure
			return{type:0};
		};
	};
	this.p_reload_gui=function(aoz,parent,args)
	{
		this.aoz=aoz;
		this.root=parent.root;
		this.className="procedure";
		this.parent=parent;
		this.vars=args;
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// JS Execute "updateTopics();"
			aoz.sourcePos="3:18:4";
			JS_Execute( "updateTopics();" );
			// GO_HOME
			aoz.sourcePos="0:20:30";
			return{type:4,procedure:"go_home",args:{}};
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
		this.vars=args;
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// If URL_SEARCH$ <> ""
			aoz.sourcePos="3:23:4";
			if(!((this.root.vars.URL_SEARCH$)!=(aoz.getString("0000000000000000"))))
				return{type:1,label:2};
		};
		this.blocks[1]=function(aoz,vars)
		{
			// JS Execute "search( '" + URL_SEARCH$ + "', searchAll );"
			aoz.sourcePos="3:24:8";
			JS_Execute( "search( '"+this.root.vars.URL_SEARCH$+"', searchAll );" );
			// URL_SEARCH$ = ""
			aoz.sourcePos="3:25:8";
			this.root.vars.URL_SEARCH$=aoz.getString("0000000000000000");
			// Else
			return{type:1,label:3};
		};
		this.blocks[2]=function(aoz,vars)
		{
			// JS Execute "loadWelcome();"
			aoz.sourcePos="3:27:8";
			JS_Execute( "loadWelcome();" );
			// End if
			aoz.sourcePos="3:28:4";
		};
		this.blocks[3]=function(aoz,vars)
		{
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
		this.vars=args;
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// JS Execute "document.getElementById( 'log_pwd' ).value = '';"
			aoz.sourcePos="3:32:4";
			JS_Execute( "document.getElementById( 'log_pwd' ).value = '';" );
			// JS Execute "document.getElementById( 'frm_login' ).style.display = 'block';"
			aoz.sourcePos="3:33:4";
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
		this.vars=args;
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// If CKEY$ = "Enter" And VALUE$ = "abracadabra"
			aoz.sourcePos="3:37:4";
			if(!(((vars.CKEY$)==(aoz.getString("00000000040016b8")))&&((vars.VALUE$)==(aoz.getString("0000000071ce3ac6")))))
				return{type:1,label:3};
		};
		this.blocks[1]=function(aoz,vars)
		{
			// JS Execute "document.getElementById( 'md_login' ).style.display = 'none';"
			aoz.sourcePos="3:38:8";
			JS_Execute( "document.getElementById( 'md_login' ).style.display = 'none';" );
			// JS Execute "document.getElementById( 'md_gator' ).style.display = 'block';"
			aoz.sourcePos="3:39:8";
			JS_Execute( "document.getElementById( 'md_gator' ).style.display = 'block';" );
			// JS Execute "document.getElementById( 'md_new_chapter' ).style.display = 'block';"
			aoz.sourcePos="3:40:8";
			JS_Execute( "document.getElementById( 'md_new_chapter' ).style.display = 'block';" );
			// JS Execute "document.getElementById( 'md_new_page' ).style.display = 'block';"
			aoz.sourcePos="3:41:8";
			JS_Execute( "document.getElementById( 'md_new_page' ).style.display = 'block';" );
			// JS Execute "document.getElementById( 'md_rename' ).style.display = 'block';"
			aoz.sourcePos="3:42:8";
			JS_Execute( "document.getElementById( 'md_rename' ).style.display = 'block';" );
			// JS Execute "document.getElementById( 'frm_login' ).style.display = 'none';"
			aoz.sourcePos="3:43:8";
			JS_Execute( "document.getElementById( 'frm_login' ).style.display = 'none';" );
			// JS Execute "document.getElementById( 'md_edit' ).style.display = 'block';"
			aoz.sourcePos="3:44:8";
			JS_Execute( "document.getElementById( 'md_edit' ).style.display = 'block';" );
			// JS Execute "document.getElementById( 'md_delete' ).style.display = 'block';"
			aoz.sourcePos="3:45:8";
			JS_Execute( "document.getElementById( 'md_delete' ).style.display = 'block';" );
			// LANG$ = "en" : RELOAD_GUI
			aoz.sourcePos="3:46:8";
			this.root.vars.LANG$=aoz.getString("0000000000000ca9");
			aoz.sourcePos="3:46:23";
			return{type:4,procedure:"reload_gui",args:{}};
		};
		this.blocks[2]=function(aoz,vars)
		{
			// End If
			aoz.sourcePos="3:47:4";
		};
		this.blocks[3]=function(aoz,vars)
		{
			// End Procedure
			return{type:0};
		};
	};
	this.p_load_code=function(aoz,parent,args)
	{
		this.aoz=aoz;
		this.root=parent.root;
		this.className="procedure";
		this.parent=parent;
		this.vars=args;
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// StackEdit Open ROOT_URL$ + "/php/index.php?page=" + CURRENT_MD$, OnSuccess$ = "PAGE_EDIT"
			aoz.sourcePos="3:51:4";
			if( MDParser == undefined )
			{
				throw "md_parser_js_not_loaded";
			}
			if( this.root.vars.ROOT_URL$+"/php/index.php?page="+this.root.vars.CURRENT_MD$ == undefined || this.root.vars.ROOT_URL$+"/php/index.php?page="+this.root.vars.CURRENT_MD$ == '' )
			{
				throw "md_load_url_missed";
			}
			MDParser.open( this.root.vars.ROOT_URL$+"/php/index.php?page="+this.root.vars.CURRENT_MD$, "PAGE_EDIT", "" );
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
		this.vars=args;
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// CURRENT_CODE$ = CODE$
			aoz.sourcePos="3:55:4";
			vars.CURRENT_CODE$=vars.CODE$;
			// StackEdit Edit CODE$ = CURRENT_CODE$, OnChange$ = "_CHANGE_EDIT", OnClose$ = "_CLOSE_EDIT"
			aoz.sourcePos="3:56:4";
			if( MDParser == undefined )
			{
				throw "md_parser_js_not_loaded";
			}
			if( vars.CURRENT_CODE$ == undefined || vars.CURRENT_CODE$ == '' )
			{
				throw "no_markdown_code_to_parse";
			}
			if( Stackedit == undefined )
			{
				throw "stackedit_lib_not_loaded";
			}
			MDParser.edit( vars.CURRENT_CODE$, "_CHANGE_EDIT", "_CLOSE_EDIT" );
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
		this.vars=args;
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// If CODE$ <> CURRENT_CODE$
			aoz.sourcePos="3:60:4";
			if(!((vars.CODE$)!=(vars.CURRENT_CODE$)))
				return{type:1,label:2};
		};
		this.blocks[1]=function(aoz,vars)
		{
			// CURRENT_CODE$ = CODE$
			aoz.sourcePos="3:61:8";
			vars.CURRENT_CODE$=vars.CODE$;
			// End If
			aoz.sourcePos="3:62:4";
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
		this.vars=args;
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// PAGE_SAVE
			aoz.sourcePos="3:66:4";
			return{type:4,procedure:"page_save",args:{}};
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
		this.vars=args;
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// CODE$ = Replace$(CODE$, "procedure:PAGE_LOAD(", "javascript:application.aoz.runProcedure( 'PAGE_LOAD'," )
			aoz.sourcePos="3:72:4";
			vars.CODE$=aoz.utilities.replaceStringInText(vars.CODE$,"procedure:PAGE_LOAD(","javascript:application.aoz.runProcedure( 'PAGE_LOAD',") ;
			// CODE$ = Replace$(CODE$, "md/documentation/", "" )
			aoz.sourcePos="3:73:4";
			vars.CODE$=aoz.utilities.replaceStringInText(vars.CODE$,"md/documentation/","") ;
			// HTML Element "topics", Content$=CODE$
			aoz.sourcePos="3:74:4";
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
		this.vars=args;
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// CURRENT_CODE$ = CODE$
			aoz.sourcePos="3:79:4";
			vars.CURRENT_CODE$=vars.CODE$;
			// StackEdit Show CODE$, "page"
			aoz.sourcePos="3:80:4";
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
		this.vars=args;
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
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
		this.vars=args;
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
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
		this.vars=args;
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// If CKEY$ = "Enter"
			aoz.sourcePos="3:92:4";
			if(!((vars.CKEY$)==(aoz.getString("00000000040016b8"))))
				return{type:1,label:5};
		};
		this.blocks[1]=function(aoz,vars)
		{
			// If Lower$(VALUE$) = "lend me your pen"
			aoz.sourcePos="3:93:8";
			if(!(((vars.VALUE$).toLowerCase())==(aoz.getString("00000000-e0e687d"))))
				return{type:1,label:3};
		};
		this.blocks[2]=function(aoz,vars)
		{
			// CHEAT_ACCESS = True
			aoz.sourcePos="3:94:12";
			this.root.vars.CHEAT_ACCESS=this.aoz.platformTrue;
			// JS Execute "document.getElementById( 'md_login' ).style.display = 'block';"
			aoz.sourcePos="3:95:12";
			JS_Execute( "document.getElementById( 'md_login' ).style.display = 'block';" );
			// JS Execute "document.getElementById( 'md_gator' ).style.display = 'none';"
			aoz.sourcePos="3:96:12";
			JS_Execute( "document.getElementById( 'md_gator' ).style.display = 'none';" );
			// Else
			return{type:1,label:4};
		};
		this.blocks[3]=function(aoz,vars)
		{
			// JS Execute "search( '" + VALUE$ + "', true );"
			aoz.sourcePos="3:98:12";
			JS_Execute( "search( '"+vars.VALUE$+"', true );" );
			// End if
			aoz.sourcePos="3:99:8";
		};
		this.blocks[4]=function(aoz,vars)
		{
			// End If
			aoz.sourcePos="3:100:4";
		};
		this.blocks[5]=function(aoz,vars)
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
		this.vars=args;
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// StackEdit Save OnSuccess$="_ON_PAGE_SAVED"
			aoz.sourcePos="3:104:4";
			MDParser.save( "_ON_PAGE_SAVED", "" );
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
		this.vars=args;
		this.parent.procParam=0;
		this.parent.procParam$="";
		this.blocks=[];
		this.blocks[0]=function(aoz,vars)
		{
			// Toast "Page saved!", Type$="success"
			aoz.sourcePos="3:108:4";
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
			// JS Execute "window.open( '" + MESSAGE$ + "', 'page_frame' );"
			aoz.sourcePos="3:109:4";
			JS_Execute( "window.open( '"+vars.MESSAGE$+"', 'page_frame' );" );
			// JS Execute "window.open( document.getElementById( 'page_frame' ).contentWindow.location.href, 'page_frame' );"
			aoz.sourcePos="3:110:4";
			JS_Execute( "window.open( document.getElementById( 'page_frame' ).contentWindow.location.href, 'page_frame' );" );
			// JS Execute "document.getElementById( 'md_edit' ).style.display = 'block';"
			aoz.sourcePos="3:111:4";
			JS_Execute( "document.getElementById( 'md_edit' ).style.display = 'block';" );
			// JS Execute "window.open( '" + ROOT_URL$ + "/topics.php', 'page_topics' );"
			aoz.sourcePos="3:112:4";
			JS_Execute( "window.open( '"+this.root.vars.ROOT_URL$+"/topics.php', 'page_topics' );" );
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
	this.aoz.v1_0_textwindows=new v1_0_textwindows(this.aoz,args);
	this.aoz.v1_0_time=new v1_0_time(this.aoz,args);
};
