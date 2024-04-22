<?php

namespace Tests\Feature;
use App\Models\Eleve;
use Illuminate\Foundation\Testing;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class EleveTest extends TestCase
{
    // use DatabaseMigrations;
    // use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_Verification_du_post(){
    $response = $this->postJson('/api/eleves', ['name' => 'Sally','grade' => 'CM3','email' => 'syll@llllll5l4lgml', 'phone' => '0022224225']);
    $response
        ->assertStatus(200)
        ->assertJson([
            'status'=> 200,
            'message'=>'L\'élève a été ajouté avec succès',
         ]);
    }

    public function test_verification_du_stockage_dans_la_bdd(){
        $user = Eleve::factory()->create([
            'email' => 'sally@example.com',
        ]);
        $this->assertDatabaseHas('eleves', [
            'email' => 'sally@example.com',
        ]);
    }
    public function test_Verification_de_la_creation_dun_eleve_et_verification_de_sa_presence_dans_la_bdd(){
        $user = Eleve::factory()->create([
            'email' => 'sally@example.com',
        ]);
        $this->assertModelExists($user);

    }
    public function test_Verification_de_la_suppression(){
        $user = Eleve::factory()->create([
            'email' => 'sally@example.com',
        ]);
        $this->assertModelExists($user);
        $user->delete();
        $this->assertModelMissing($user);

    }

 

    /**
     * A basic browser test example.
     */
    // public function test_verification_du_login(): void
    // {
    //     $response = Eleve::factory()->create([
    //         'email' => 'test23@laravel.com',
    //     ]);
    //     $this->browse(function (Browser $browser) use ($user) {
    //         $browser->visit('/login')
    //                 ->type('email', $user->email)
    //                 ->type('password', 'password')
    //                 ->press('Login')
    //                 ->assertPathIs('/home');
    //     });
    // }

    public function test_verification_de_la_session()
        {
            $user = Eleve::factory()->create([
                'email' => 'sally@example.com',
            ]);
            $this->assertModelExists($user);
            $response = $this->withSession(['banned' => false])->get('/');
        }
}
