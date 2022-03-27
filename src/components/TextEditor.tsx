import { Editor } from '@tinymce/tinymce-react';

interface Props {
	tinymceSrc: string;
	value?: string;
	onEditorChange: (newValue: string, editorRef: any) => void;
	initialValue?: string;
	plugins?: string[] | string;
	toolbar?: string | boolean | string[];
	contentStyle?: string;
	inline?: boolean;
	language?: 'en' | 'he_IL';
}

const TextEditor = (props: Props) => {
	return (
		<>
			<Editor
				value={props.value}
				onEditorChange={(newValue: string, editorRef?: any) => props.onEditorChange(newValue, editorRef)}
				tinymceScriptSrc={props.tinymceSrc}
				inline={props.inline}
				initialValue={props?.initialValue}
				init={{
					height: 500,
					language: props?.language || 'en',
					menubar: false,
					plugins: props?.plugins || [''],
					toolbar: props?.toolbar || '',
					content_style: props?.contentStyle || '',
				}}
			/>
		</>
	);
};

export default TextEditor;

// e: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
