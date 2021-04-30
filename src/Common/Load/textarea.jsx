import s from './textarea.module.css';

export const Textarea = ({ input, meta, ...props }) => {

    const hasError = meta.touched  && meta.error;
    return <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        <div>
            <textarea {...input} {...props} />
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}

export const Textarea2 = ({ input, meta, ...props }) => {

    const hasError = meta.touched  && meta.error;
    return <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        <div>
            <input {...input} {...props} />
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}
