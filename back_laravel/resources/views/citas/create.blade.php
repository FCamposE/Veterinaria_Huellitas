@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Pide tu cita') }}</div>

                <div class="card-body">
                    @if(Session::has('success_message'))
                    <div class="alert alert-success alert-dismissible face show" role="alert">
                        <strong>ÉXITO!</strong> {!! session('success_message') !!}
                    </div>
                    @endif
                    <form method="POST" action="{{ route('citas.store') }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="nombre_mascota" class="col-md-4 col-form-label text-md-end">{{ __('Nombre de la mascota') }}</label>

                            <div class="col-md-6">
                                <input id="nombre_mascota" type="text" class="form-control @error('nombre_mascota') is-invalid @enderror" name="nombre_mascota" value="{{ old('nombre_mascota') }}" required autocomplete="nombre_mascota" autofocus>

                                @error('nombre_mascota')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="costo" class="col-md-4 col-form-label text-md-end">{{ __('Costo') }}</label>

                            <div class="col-md-6">
                                <input id="costo" type="doubleval" class="form-control @error('costo') is-invalid @enderror" name="costo" value="{{ old('costo') }}" required autocomplete="costo">

                                @error('costo')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="descripcion" class="col-md-4 col-form-label text-md-end">{{ __('Descripcion') }}</label>

                            <div class="col-md-6">
                                <input id="descripcion" type="text" class="form-control @error('descripcion') is-invalid @enderror" name="descripcion" required autocomplete="new-descripcion">

                                @error('descripcion')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="fecha" class="col-md-4 col-form-label text-md-end">{{ __('Fecha') }}</label>

                            <div class="col-md-6">
                                <input id="fecha" type="date" class="form-control" name="fecha" required autocomplete="30-10-1996">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="veterinario" class="col-md-4 col-form-label text-md-end">{{ __('Veterinario encargado') }}</label>

                            <div class="col-md-6">
                                <input id="veterinario" type="text" class="form-control" name="veterinario" required autocomplete="Dr. Manuel">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="tipo_servicio" class="col-md-4 col-form-label text-md-end">{{ __('Tipo de servicio') }}</label>

                            <div class="col-md-6">
                                <input id="tipo_servicio" type="text" class="form-control" name="tipo_servicio" required autocomplete="Cita">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="estado" class="col-md-4 col-form-label text-md-end">{{ __('Estado') }}</label>

                            <div class="col-md-6">
                                <input id="estado" type="text" class="form-control" name="estado" required autocomplete="Cita realizada con éxito">
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Registrar cita') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection