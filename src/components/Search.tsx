import { yupResolver } from "@hookform/resolvers/yup"
import { useCallback, useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"
import { InferType } from "yup"
import search from "../assets/search.svg"
import { debounce } from "../utils/debounce"

interface SearchProps {
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

interface FormState {
  value: string
}

const validationSchema = yup.object({
  value: yup.string().max(50, "Max length - 50 symbols").defined()
})

export const Search = ({ setQuery }: SearchProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm({ resolver: yupResolver(validationSchema) })

  const debouncedSetQuery = useCallback(
    debounce((query: string) => setQuery(query), 400),
    []
  )

  useEffect(() => {
    const subscription = watch(async (state) => {
      try {
        await validationSchema.validate(state, { abortEarly: false })
        clearErrors("value")
        onSubmit(state as FormState)
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          setError("value", {
            message: err.inner[0].message
          })
        }
      }
    })
    return () => subscription.unsubscribe()
  }, [watch])

  const onSubmit: SubmitHandler<InferType<typeof validationSchema>> = (data) => {
    debouncedSetQuery(data.value)
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("value")} className="search__input" type="text" placeholder="Search Art, Artist, Work..." />
        <img src={search} alt="Search icon" />
      </form>
      {errors?.value && <p className="error-message">{errors.value.message}</p>}
    </div>
  )
}
