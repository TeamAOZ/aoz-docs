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
// The Tracker Instructions
// By Baptiste Bideaux
// Version 0.99
// 01/02/2020
// (c) AOZ Studio 2019
//
// Compiled with AOZ Transpiler Version 14.03 on the 
//

function ext_tracker( aoz, args )
{
	this.aoz=aoz;
	this.parent=this;
	this.root=this;
	this.manifest=JSON.parse(atob('eyJ2ZXJzaW9uIjoiOSIsInZlcnNpb25FeHRlbnNpb24iOiIxIiwiaW5mb3MiOnsiYXBwbGljYXRpb25OYW1lIjoiVGhlIFRyYWNrZXIgSW5zdHJ1Y3Rpb25zIiwiYXV0aG9yIjoiQnkgQmFwdGlzdGUgQmlkZWF1eCIsInZlcnNpb24iOiJWZXJzaW9uIDAuOTkiLCJkYXRlIjoiMDEvMDIvMjAyMCIsImNvcHlyaWdodCI6IihjKSBBT1ogU3R1ZGlvIDIwMTkiLCJzdGFydCI6InRyYWNrZXIuYW96IiwibmFtZSI6InRyYWNrZXIifSwiY29tcGlsYXRpb24iOnsibm9XYXJuaW5nIjpbXSwiZXJyb3JzIjp7ImVuIjpbIm1vZHVsZV9taXNzaW5nOiBcdFx0XHRcdE1vZHVsZSBmaWxlIG1pc3NpbmciLCJpbnZhbGlkX2Jhbms6XHRcdFx0IFx0XHRJbnZhbGlkIEJhbmsgbnVtYmVyOiAlMSIsImJhbmtfcmVzZXJ2ZWQ6XHRcdFx0IFx0XHRCYW5rIG51bWJlciAoJTEpIHJlc2VydmVkIGZvciBhbiBvdGhlciBkYXRhdHlwZSIsImZvcm1hdF93cm9uZzogXHRcdFx0XHRcdFVuc3VwcG9ydGVkIG1vZHVsZSBmb3JtYXQgKCUxKSIsIm5vX2RhdGFfYmFuazogXHRcdFx0XHRcdE5vIGRhdGEgaW4gYmFuayJdLCJmciI6WyJtb2R1bGVfbWlzc2luZzogXHRcdFx0XHRGaWNoaWVyIGRlIG1vZHVsZSBtYW5xdWFudCIsImludmFsaWRfYmFuazpcdFx0XHQgXHRcdE51belybyBkZSBiYW5xdWUgaW5jb3JyZWN0OiAlMSIsImJhbmtfcmVzZXJ2ZWQ6XHRcdFx0IFx0XHRDZSBudW3pcm8gZGUgYmFucXVlICglMSkgZXN0IHLpc2VydukgcG91ciB1biBhdXRyZSB0eXBlIGRlIGRvbm7pZXMiLCJmb3JtYXRfd3Jvbmc6IFx0XHRcdFx0XHRGb3JtYXQgZGUgbW9kdWxlIG5vbiBzdXBwb3J06SAoJTEpIiwibm9fZGF0YV9iYW5rOiBcdFx0XHRcdFx0QXVjdW5lIGRvbm7pZSBkYW5zIGxhIGJhbnF1ZSJdfSwiaW5jbHVkZVBhdGhzIjpbXX0sImJvb3RTY3JlZW4iOnsiYWN0aXZlIjpmYWxzZSwid2FpdFNvdW5kcyI6ZmFsc2UsImNsaWNrU291bmRzIjpmYWxzZX0sImVycm9ycyI6e319'));
	this.vars=typeof args=='undefined'?{}:args;
	this.contextName='ext_tracker';
	this.aoz[ "extension" + "Tracker"]=this;
	this.aoz.finalWait++;
	

this.blocks=[];
	this.blocks[0]=function(aoz,vars)
	{
		// From source: D:/Programs/AOZ_Studio_SE/AOZ_Studio/app/aoz/extensions/tracker/tracker.aoz
		aoz.sourcePos="0:33:0";
		// Javascript
		this.aoz.extensionTracker = this;
		this.module_isLoop = false;
		this.load_done = true;
		this.load_parameter = '';
		this.load_error = undefined;
		this.lastPlay = -1;
		this.startTime = undefined;
		this.lastState = undefined;
		this.smoothingTimeConstant = 0.01;
		this.initialized = true;
		this.arrMOD = undefined;
		BassoonTracker.init( true );
		this.supportedformats=new Array('mod', 'xm');
		this.load = function(args)
		{
			if(typeof args == 'undefined')
			{
				return;
			}
			var moduleName = args[0];
			var bankNumber = args[1];
			if(typeof moduleName == 'undefined' || moduleName == '')
			{
				throw 'module_missing';
			}
			if( typeof bankNumber == 'string' && bankNumber != '' )
			{
				if( this.arrMOD == undefined )
				{
					this.arrMOD = {};
				}
				this.arrMOD[ 'mod_' + bankNumber ] = moduleName;
				this.load_done = true;
				return;
			}
			if(typeof bankNumber == 'undefined' || isNaN(bankNumber) || bankNumber < 0)
			{
				throw { error: "invalid_bank", parameter: bankNumber };
			}
			if(bankNumber < 6)
			{
				throw { error: "bank_reserved", parameter: bankNumber };
			}
			var ext=moduleName.split('.').pop().toLowerCase().trim();
			if (this.supportedformats.indexOf(ext)==-1) 
			{
				ext=moduleName.split('/').pop().split('.').shift().toLowerCase().trim();
				if (this.supportedformats.indexOf(ext)==-1) 
				{
					throw { error: "format_wrong", parameter: ext };
				}
			}
			var url = moduleName;
			var descriptor = this.aoz.filesystem.getFile( url );
			var self = this;
			this.aoz.filesystem.loadFile( descriptor, { responseType: 'binary' }, function( response, data, extra )
			{
				if ( !response )
				{
					this.load_error  = 'cannot_load_file';
					this.load_parameter = descriptor.path;
				}
				else
				{
					var block = self.aoz.allocMemoryBlock( data, self.aoz.manifest.compilation.endian );
					block.moduleName = moduleName;
					var bank = self.aoz.banks.reserve( bankNumber, 'tracker' );
					bank.setElement( 1, block );
					self.aoz.banks.updateBank( bank, bank.index, self.aoz.currentContextName );
				}
				self.load_done = true;
			});
		};
		this.load_wait = function()
		{
			if ( this.load_done )
			{
				this.load_done = false;
				var load_error = this.load_error;
				var load_parameter = this.load_parameter;
				this.load_error = undefined;
				this.load_parameter = '';
				if ( this.load_error )
					throw { error: load_error, parameter: load_parameter };
				return true;
			}
			return false;
		};
		this.trackLoop = function(_repeat)
		{
			self.module_isLoop = _repeat;
		};
		this.play = function(bankNumber, patternNumber)
		{
			if( typeof bankNumber == 'string' && this.arrMOD != undefined && this.arrMOD[ 'mod_' + bankNumber ] != undefined )
			{
				if(this.lastPlay && this.lastPlay > -1)
				{
					if( BassoonTracker.isPlaying() )
					{
						BassoonTracker.stop();
					}
				}
				var self = this;
				var descriptor = this.aoz.filesystem.getFile( this.arrMOD[ 'mod_' + bankNumber ] );            
				BassoonTracker.load( descriptor.dir + "/" + descriptor.filename + "." + descriptor.extension, false, function()
				{
					if( patternNumber > ( BassoonTracker.getSong().length - 1 ) )
					{
						patternNumber = 0;
					}
					BassoonTracker.setCurrentSongPosition(patternNumber);
					BassoonTracker.playSong();
					self.startTime = new Date().getTime();
					self.lastPlay = bankNumber;
				} );
				this.load_done = true;
				return;
			}
			if(typeof bankNumber == 'undefined' || isNaN(bankNumber) || bankNumber < 0)
			{
				throw { error: "bank_reserved", parameter: bankNumber };
			}
			if(bankNumber < 6)
			{
				throw { error: 'bank_reserved', parameter: bankNumber };
			}
			if(typeof patternNumber == 'undefined' || isNaN(patternNumber) || patternNumber < 0)
			{
				patternNumber = 0;
			}
			if(!this.initialized)
			{
				BassoonTracker.init(true);
				this.initialized = true;
			}
			if(this.lastPlay && this.lastPlay > -1)
			{
				if( BassoonTracker.isPlaying() )
				{
					BassoonTracker.stop();
				}
			}
			var bank = this.aoz.banks.getBank( bankNumber, this.aoz.currentContextName, 'tracker' );
			var block = bank.getElement( 1 );
			var self = this;
			this.load_done = false;
			var blobUrl = block.getBlobUrl();
			BassoonTracker.load(blobUrl, block.moduleName, function()
			{
				if(patternNumber > (BassoonTracker.getSong().length - 1))
				{
					patternNumber = 0;
				}
				BassoonTracker.setCurrentSongPosition(patternNumber);
				BassoonTracker.playSong();
				self.startTime = new Date().getTime();
				self.lastPlay = bankNumber;
				self.load_done = true;
			});
		};
		this.stop = function()
		{
					BassoonTracker.stop();
		};
		this.pause = function()
		{
			if(this.lastPlay && this.lastPlay > -1)
			{
				if( BassoonTracker.isPlaying() )
				{
					BassoonTracker.togglePlay();
				}
			}
		};
		this.resume = function()
		{
			if(this.lastPlay && this.lastPlay > -1)
			{
				if( !BassoonTracker.isPlaying() )
				{
					BassoonTracker.playSong();
				}
			}
		};
		this.title = function()
		{
			if(this.lastPlay && this.lastPlay > -1)
			{
				return BassoonTracker.getSong().title;
			}
		};
		this.signature = function()
		{
			if(this.lastPlay && this.lastPlay > -1)
			{
				var s = BassoonTracker.getSong().typeId;
				switch(s)
				{
					case "M.K.":
					case "M!K!":
					case "4CHN":
					case "FLT4":
					case "8CHN":
					case "FLT8":
					case "6CHN":
					case "28CH":
						BassoonTracker.getSong().formatType = 'mod';
						s = 'ProBassoonTracker (MOD)';
						break;
					default:
						BassoonTracker.getSong().formatType = 'xm';
						s = 'FastBassoonTracker (XM)';
						break;
				}
				return s;
			}
		};
		this.length = function()
		{
			if(this.lastPlay && this.lastPlay > -1)
			{
				return BassoonTracker.getSong().length;
			}
		};
		this.channels = function()
		{
			if(this.lastPlay && this.lastPlay > -1)
			{
				return BassoonTracker.getTrackCount();
			}
		};
		this.position = function()
		{
			if(this.lastPlay && this.lastPlay > -1)
			{
				var time = new Date().getTime() - this.startTime;
				var state = BassoonTracker.getStateAtTime(time);
				if(state)
				{
					this.lastState = state;
					return state.songPos;
				}
				else
				{
					if( this.lastState )
					{
						return this.lastState.songPos;
					}
				}
			}
		};
		this.row = function()
		{
			if(this.lastPlay && this.lastPlay > -1)
			{
				var time = new Date().getTime() - this.startTime;
				var state = BassoonTracker.getStateAtTime(time);
				if(state)
				{
					this.lastState = state;
					return state.patternPos;
				}
				else
				{
					if( this.lastState )
					{
						return this.lastState.patternPos;
					}
				}
			}
		};
		this.volume = function( volume )
		{
			if( volume < 0 || volume > 100 )
			{
				volume = 100;
			}
			if( BassoonTracker && BassoonTracker.audio )
			{
				BassoonTracker.audio.slideMasterVolume( volume / 100 );
			}
			if( this.initialized && Audio && Audio.setMasterVolume )
			{
				Audio.setMasterVolume(Math.round((64/100) * volume),0)
			}
		};
		this.samPlay = function( sampleIndex, sampleRate, volume )
		{
			if(this.initialized)
			{
				if( volume < 0 || volume > 100 )
				{
					volume = 100;
				}
				if( typeof( sampleRate ) == 'undefined' || isNaN( sampleRate ))
				{
					this.signature();
					if( typeof( BassoonTracker.getSong().formatType ) == 'undefined' || BassoonTracker.getSong().formatType == 'mod' )
					{
						sampleRate = 72;
					}
					if( BassoonTracker.getSong().formatType == 'xm' )
					{
						sampleRate = 3600;
					}
				}
				Audio.playSample(sampleIndex, sampleRate, Math.round((64/100) * volume));
			}
		};
		this.pattern = function( pattern )
		{
			if(this.initialized)
			{
				BassoonTracker.setCurrentSongPosition(pattern);
			}
		};
		// End Javascript
		return{type:0}
	};
	this.aoz.run(this,0,null);
};
