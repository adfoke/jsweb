import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('姓名必填').min(2, '最少2个字符'),
  email: yup.string().required('邮箱必填').email('邮箱格式错误'),
  message: yup.string().required('留言必填').max(500, '最多500字符'),
});

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, value);
      }
    });
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-4">
      <p className="text-lg text-gray-700 mb-6">
        有问题？请通过此页面联系我们！
      </p>

      {/* 新增互动表单 */}
      <div className="max-w-2xl mx-auto w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="mb-8 p-6 bg-stone-100 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">姓名</label>
            <input
              {...register('name')}
              className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">邮箱</label>
            <input
              type="email"
              {...register('email')}
              className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">留言</label>
            <textarea
              {...register('message')}
              rows="4"
              className={`w-full p-2 border rounded ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            提交
          </button>
        </form>
      </div>
    </div>
  );
}
