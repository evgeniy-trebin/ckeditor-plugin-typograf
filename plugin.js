CKEDITOR.plugins.add('typograf', {
    icons: 'typograf',
    init: function(editor) {
        editor.ui.addButton('Typograf', {
            label: 'Типографический текст',
            command: 'typograf',
            toolbar: 'insert'
        });

        if ( editor.contextMenu ) {
            editor.addMenuGroup( 'typografGroup' );
            editor.addMenuItem( 'typografItem', {
                label: 'Редактировать Типографический текст',
                icon: this.path + 'icons/typograf.png',
                command: 'typograf',
                group: 'typografGroup'
            });
            editor.contextMenu.addListener( function( element ) {
                if ( element.getAscendant( 'p', true ) ) {
                    return { typografItem: CKEDITOR.TRISTATE_OFF };
                }
            });
        }

        editor.addCommand('typograf', new CKEDITOR.dialogCommand('typografDialog'));

        CKEDITOR.dialog.add('typografDialog', this.path + 'dialogs/typograf.js');
    },
    onLoad: function() {
        CKEDITOR.addCss(
                'span.typograf {' +
                    'background: #efefef' +
                '}'
        );
    }
});