CKEDITOR.dialog.add('typografDialog', function (editor) {

    var
        html_tag = 'span',
        custom_class = 'typograf'
    ;

    return {
        title: 'Типографический текст',
        minWidth: 400,
        minHeight: 200,

        contents: [
            {
                id: 'tab-basic',
                label: 'Основное',
                elements: [
                    {
                        type: 'textarea',
                        id: 'typograf',
                        label: 'Типографический текст',
                        validate: CKEDITOR.dialog.validate.notEmpty('Заполните поле "Типографический текст" '),
                        setup: function(element) {
                            this.setValue( element.getText() );
                        },
                        commit: function( element ) {
                            element.setText( this.getValue() );
                        }

                    }
                ]
            }
        ],

        onShow: function() {
            var
                selection = editor.getSelection(),
                element   = selection.getStartElement()
                ;

            if ( element ) {
                element = element.getAscendant(html_tag, true);
            }

            if ( !element || element.getName() != html_tag || element.$.className != custom_class) {
                element = editor.document.createElement(html_tag);
                element.setAttribute('class', custom_class);
                this.insertMode = true;
            }
            else {
                this.insertMode = false;
            }

            this.element = element;

            if ( !this.insertMode ) {
                this.setupContent( this.element );
            }

        },

        onOk: function() {
            var
                dialog = this,
                tpg = dialog.element
                ;

            dialog.commitContent(tpg);

            if (dialog.insertMode) {
                editor.insertElement(tpg);
            }
        }
    };
});