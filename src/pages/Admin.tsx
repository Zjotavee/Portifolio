import { useState } from 'react';
import { useProjectStore, Project } from '@/store/useProjectStore';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Edit, Trash2 } from 'lucide-react';

export default function Admin() {
  const { projects, addProject, updateProject, deleteProject } = useProjectStore();
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState<Partial<Project>>({});

  const handleSave = () => {
    if (currentProject.id) {
      updateProject(currentProject.id, currentProject);
    } else {
      addProject(currentProject as Omit<Project, 'id'>);
    }
    setIsEditing(false);
    setCurrentProject({});
  };

  const handleEdit = (project: Project) => {
    setCurrentProject(project);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este projeto?')) {
      deleteProject(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link to="/" className="p-2 hover:bg-slate-200 rounded-full transition-colors -ml-2 sm:ml-0">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold font-display">Gerenciador</h1>
          </div>
          <button
            onClick={() => {
              setCurrentProject({});
              setIsEditing(true);
            }}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 sm:py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            <Plus className="w-4 h-4" />
            Novo Projeto
          </button>
        </div>

        {isEditing ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-4 sm:p-8 rounded-2xl shadow-sm border border-slate-200"
          >
            <h2 className="text-xl font-bold font-display mb-6">{currentProject.id ? 'Editar Projeto' : 'Novo Projeto'}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Título</label>
                  <input
                    type="text"
                    value={currentProject.title || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Descrição Curta</label>
                  <input
                    type="text"
                    value={currentProject.shortDescription || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, shortDescription: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">URL da Imagem Principal</label>
                  <input
                    type="text"
                    value={currentProject.imageUrl || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, imageUrl: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">URL ao Vivo (Opcional)</label>
                  <input
                    type="text"
                    value={currentProject.liveUrl || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, liveUrl: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">URL do GitHub (Opcional)</label>
                  <input
                    type="text"
                    value={currentProject.githubUrl || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, githubUrl: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={currentProject.featured || false}
                    onChange={(e) => setCurrentProject({ ...currentProject, featured: e.target.checked })}
                    className="w-5 h-5 sm:w-4 sm:h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor="featured" className="text-sm font-medium text-slate-700">Destaque na Home</label>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Descrição Completa</label>
                  <textarea
                    value={currentProject.fullDescription || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, fullDescription: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Descrição do Cliente</label>
                  <textarea
                    value={currentProject.clientDescription || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, clientDescription: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">O Problema</label>
                  <textarea
                    value={currentProject.problem || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, problem: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Estratégia</label>
                  <textarea
                    value={currentProject.strategy || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, strategy: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Processo de Design</label>
                  <textarea
                    value={currentProject.designProcess || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, designProcess: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Arquitetura Técnica</label>
                  <textarea
                    value={currentProject.architecture || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, architecture: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Resultados</label>
                  <textarea
                    value={currentProject.results || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, results: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Tecnologias (separadas por vírgula)</label>
                  <input
                    type="text"
                    value={currentProject.technologies?.join(', ') || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, technologies: e.target.value.split(',').map(t => t.trim()) })}
                    className="w-full px-4 py-2.5 sm:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Galeria de Imagens (URLs separadas por vírgula)</label>
                  <textarea
                    value={currentProject.galleryUrls?.join(', ') || ''}
                    onChange={(e) => setCurrentProject({ ...currentProject, galleryUrls: e.target.value.split(',').map(t => t.trim()) })}
                    className="w-full px-4 py-2.5 sm:py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    rows={2}
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
              <button
                onClick={() => setIsEditing(false)}
                className="w-full sm:w-auto px-6 py-2.5 sm:py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                className="w-full sm:w-auto px-6 py-2.5 sm:py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Salvar Projeto
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Mobile View */}
            <div className="block sm:hidden">
              {projects.map((project) => (
                <div key={project.id} className="p-4 border-b border-slate-100 last:border-0">
                  <div className="flex gap-4 mb-3">
                    <img src={project.imageUrl} alt={project.title} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-slate-900 truncate">{project.title}</div>
                      <div className="text-sm text-slate-500 line-clamp-2 mt-0.5">{project.shortDescription}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      {project.featured ? (
                        <span className="px-2.5 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">Destaque</span>
                      ) : (
                        <span className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">Normal</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(project)}
                        className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-sm font-semibold text-slate-600">Projeto</th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-600">Destaque</th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-600 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <img src={project.imageUrl} alt={project.title} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                          <div className="min-w-0">
                            <div className="font-medium text-slate-900 truncate">{project.title}</div>
                            <div className="text-sm text-slate-500 truncate max-w-xs">{project.shortDescription}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {project.featured ? (
                          <span className="px-2.5 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">Sim</span>
                        ) : (
                          <span className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">Não</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleEdit(project)}
                          className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(project.id)}
                          className="p-2 text-slate-400 hover:text-red-600 transition-colors ml-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
