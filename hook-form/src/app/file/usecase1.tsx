import styles from './file.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function UseCase() {

  type Input = {
    files: FileList
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>()
  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data.files)
  }


  return (
    <main className={styles.main}>
      <h1>File</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input accept=".jpg, .jpeg, .png" className="form-control form-control-sm"  {...register("files", { required: true })} type="file" />
        <br />
        <input type="submit" value="enviar" />
      </form>
    </main>
  )
}
