CKEDITOR.plugins.add( 'video', {
    icons: 'video',
    init: function( editor ) {
		editor.addCommand( 'video', new CKEDITOR.dialogCommand( 'videoDialog' ) );

		editor.ui.addButton( 'Video', {
			label: 'Insert Video',
			command: 'video',
			toolbar: 'insert'
		});

		CKEDITOR.dialog.add( 'videoDialog', this.path + 'dialogs/video.js' );
    }

});