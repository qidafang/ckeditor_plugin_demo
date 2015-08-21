CKEDITOR.dialog.add( 'videoDialog', function ( editor ) {
	return {
        title: 'Video Properties',
        minWidth: 400,
        minHeight: 200,

        contents: [
            {
                id: 'flv',
                label: 'VIDEO URL',
                elements: [
					{
						type: 'text',
						id: 'flvLink',
						label: 'insert url of the VIDEO',
						validate: CKEDITOR.dialog.validate.notEmpty( "cannot be empty!" )
					}
                ]
            }
        ],

		onOk: function() {
			var dialog = this;
			var video = editor.document.createElement( 'video' );
			video.setAttribute('src', dialog.getValueOf('flv', 'flvLink'));
			editor.insertElement( video );
		}
    };
});