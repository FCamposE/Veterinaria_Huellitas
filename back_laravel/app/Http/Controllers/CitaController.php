<?php

namespace App\Http\Controllers;

use App\Models\Cita;
use Illuminate\Http\Request;

class CitaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('citas.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if($request->isMethod('post')){
            $data = $request->all();
            //echo "<pre>"; print_r($data); die;

            $cita = new Cita();
            $cita->nombre_mascota = $data['nombre_mascota'];
            $cita->costo = $data['costo'];
            $cita->descripcion = $data['descripcion'];
            $cita->fecha = $data['fecha'];
            $cita->veterinario = $data['veterinario'];
            $cita->tipo_servicio = $data['tipo_servicio'];
            $cita->estado = $data['estado'];
            $cita->save();

            return redirect()->back()->with('success_message','Cita creada con éxito');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Cita $cita)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cita $cita)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cita $cita)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cita $cita)
    {
        //
    }
}
