package ma.enset.bloodbackend.REPOSITORY;

import ma.enset.bloodbackend.ENTITYS.Rendezvous;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RendezvousRepository extends JpaRepository<Rendezvous, Long> {
}
