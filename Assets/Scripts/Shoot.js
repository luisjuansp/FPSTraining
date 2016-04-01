#pragma strict

var Bala : Rigidbody;
var speed : int;

function Start () {

}

function Update () {
	if ( Input.GetButtonDown("Fire1")) {
		var clone = Instantiate(Bala, transform.position, transform.rotation);
		clone.velocity = transform.TransformDirection(Vector3.up * speed);
		Destroy (clone.gameObject, 1);
  	}
}