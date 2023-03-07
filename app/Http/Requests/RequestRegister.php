<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rules\Password;
use Illuminate\Foundation\Http\FormRequest;

class RequestRegister extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required','confirmed',Password::min(8)
            ->letters()
            ->symbols()
            ->numbers()
            // ->rules()
           ]
        ];
    }
    public function messages()
    {
       return ['email.required'=>'le nom est obligatoire',
                'email.unique'=>'le nom existe déjà',
                'email.email'=>'its not email',

                // 'password.required' => 'Your custom error message for the required rule goes here.',
                // 'password.confirmed' => 'Your custom error message for the confirmed rule goes here.',
                // 'password.password[0]'=>'test test',
                // 'password.symbols'=>'test test',
                // 'password.numbers'=>'test test',
                // 'password.custom.letters' => 'Your custom error message for the letters rule goes here.',
                // 'password.custom.symbols' => 'Your custom error message for the symbols rule goes here.',
                // 'password.custom.numbers' => 'Your custom error message for the numbers rule goes here.'
                //
            ];
    }
}
